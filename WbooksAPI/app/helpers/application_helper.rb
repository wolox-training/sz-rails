module ApplicationHelper
  def human_date(date)
    date.strftime('%Y-%m-%d')
  end

  def cool_text(text)
    text.mb_chars.titleize
  end
end
