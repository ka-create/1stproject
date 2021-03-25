document.addEventListener('DOMContentLoaded', function() {
    var scrapeButton = document.getElementById('clickToScrape');
    scrapeButton.addEventListener('click', function() {
           callScappingAPi()
    })

    function callScappingAPi(){
       axios.post('https://api.example.com',{url:'myurl'}).then((response)=>{
          //here where you receive your information you should write some logice to handle the data
          console.log(response.data)
       }).catch((error) =>{
         console.error(error);
       }).finally(()=>{
          //you can do anything you want no matter the result is
       })

    }
