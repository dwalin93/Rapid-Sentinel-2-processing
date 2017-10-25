/**
 * Created by pglah on 23.10.2017.
 */
var url_search="https://scihub.copernicus.eu/apihub/search?q=";

function getSentinelData(){
    UUID = 'f7ebcd08-25c9-4aee-99d9-a5d72fa4f317';
    Filename = 'S2A_MSIL1C_20171010T104021_N0205_R008_T32ULC_20171010T104021.SAFE';

    console.log('hier1');
    $.ajax({
        type: 'GET',
        url:  'https://scihub.copernicus.eu/dhus/odata/v1/Products?$&format=json$filter=year(IngestionDate) eq 2014 and month(IngestionDate) eq 12',
        //'https://scihub.copernicus.eu/dhus/odata/v1/Products('+ UUID + ')'+ '/Nodes('+ Filename + ')' + '/Nodes('+ 'manifest.safe' + ')/$format=json$value' ,
        contentType: 'application/json; charset=utf-8',
        dataType:'json',
        async:true,
        xhrFields: {
            withCredentials: false
        },
        headers: {
            'Access-Control-Allow-Origin': 'X-Requested-With'

        },
        success: function(data,status){
            JSON.parse((JSON.stringify(data)));
            console.log(data);
            console.log('hier2');
        },
        error: function (errorMessage) {
        }


    })
}


L.easyButton('fa-globe', function(){
        map.on('click', getSentinelData());
    },
    'get Sentinel Data'
).addTo(map);