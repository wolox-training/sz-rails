module OpenLibraryService
  include HTTParty

  def book_info(isbn)
    url = "https://openlibrary.org/api/books?bibkeys=ISBN:#{isbn}&format=json&jscmd=data"
    response = HTTParty.get(url)
    response_wrap(JSON.parse(response.body), isbn)
  end

  private

  def response_wrap(response_body, isbn)
    if response_body.keys.any?
      correct_fill(response_body["ISBN:#{isbn}"], isbn)
    else
      { message: 'Information not found.' }
    end
  end

  def correct_fill(response_body, isbn)
    {
      ISBN:             isbn,
      Title:            response_body['title'],
      Subtitle:         response_body['subtitle'],
      Number_of_pages:  response_body['number_of_pages'],
      Authors:          response_body['authors'].map { |a| a['name'] }
    }
  end
end
