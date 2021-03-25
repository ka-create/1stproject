from flask import Flask, request, make_response, jsonify
import main_scrap



app = Flask(__name__)





@app.route('/api/scrape_company', methods=['POST'])
def scrape_company():
    data = request.get_json() #data dans le body
    url = data["url"] #url dans le body
    message = main_scrap.company_scraping(url)

    return message

@app.route('/api/scrape_companies', methods=['GET'])
def scrape_companies():
    message = main_scrap.companies_scraping()

    return message





if __name__ == '__main__':

    app.run(debug=True)