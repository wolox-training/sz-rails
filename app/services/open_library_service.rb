module OpenLibraryService
  include HTTParty

  def book_info(isbn)
    url = "https://openlibrary.org/api/books?bibkeys=ISBN:#{isbn}&format=json&jscmd=data"
    response = HTTParty.get(url)
    response_wrap(JSON.parse(response.body))
  end

  private

  def response_wrap(response_body)
    if response_body.keys.any?
      correct_fill(response_body, get_primary_key(response_body))
    else
      { message: 'Information not found.' }
    end
  end

  def correct_fill(response_body, primary_key)
    {
      ISBN:             get_isbn(primary_key),
      Title:            response_body[primary_key]['title'],
      Subtitle:         response_body[primary_key]['subtitle'],
      Number_of_pages:  response_body[primary_key]['number_of_pages'],
      Authors:          get_authors(response_body[primary_key]['authors'])
    }
  end

  def get_primary_key(response_body)
    response_body.keys.first
  end

  def get_isbn(response_body)
    values = response_body.split(':')
    values.first.casecmp('isbn').zero? ? values.last : 'error'
  end

  def get_authors(json)
    authors = []
    json.each do |author|
      authors << author['name']
    end
    authors
  end
end
