describe("Yatayat Library", function () {
    describe( "yatayat's neighborNodes function", function () {
        it("returns the right neighbor in testSystem1", function () {
            expect(testSystem1.neighborNodes("31228768", "2269119")).toEqual(
            expect("need to write test").toEqual(true);
        });
        
    });

    describe( "yatayat's takeMeThere algorithm", function () {
        it("should fail when asking route from pulchowk to damkal in testSystem1", function () {
            expect(testSystem1.takeMeThere("317532042", "1278980875")).toBeUndefined();
        });
        it("should take me from damkal to harihar bhawan in two steps", function () {
            expect(testSystem1.takeMeThere("1273375058", "31150613").length).toEqual(1); // go through one route
            expect(testSystem1.takeMeThere("1278980875", "317532037")[0].stops.length).toEqual(3); // and three stops
            expect(testSystem1.takeMeThere("1278980875", "317532037")[0].stops[0].id).toEqual("317532042");
            expect(testSystem1.takeMeThere("1278980875", "317532037")[0].stops[1].id).toEqual("317532042");
            expect(testSystem1.takeMeThere("1278980875", "317532037")[0].stops[2].id).toEqual("1278980875");
        });
        it("should take me to sinamangal to babarmahal through two routes", function () {
            expect(testSystem1.takeMeThere("1273375058", "31150613")).toBeDefined();
            expect(testSystem1.takeMeThere("1273375058", "31150613").length).toEqual(2); // go through two routes
            expect(testSystem1.takeMeThere("1273375058", "31150613")[0].stops.length).toEqual(2); // go through two routes
            expect(testSystem1.takeMeThere("1273375058", "31150613")[1].stops.length).toEqual(2); // go through two routes
            expect(testSystem1.takeMeThere("1278980875", "317532037")[0].stops[1].id).toEqual("31228768");
            expect(testSystem1.takeMeThere("1278980875", "317532037")[1].stops[0].id).toEqual("31228768");
        });
    });
});

var testSystem1 = new YY.System(JSON.parse('[{"id":"2269119","stops":[{"id":"1278980875","lat":"27.6759720","lng":"85.3159258","tag":{"name":"Damkal","public_transport":"stop_position"},"name":"Damkal"},{"id":"317532042","lat":"27.6780442","lng":"85.3164333","tag":{"name":"Pulchowk","public_transport":"stop_position"},"name":"Pulchowk"},{"id":"317532037","lat":"27.6810962","lng":"85.3176805","tag":{"name":"Harihar Bhawan","public_transport":"stop_position"},"name":"Harihar Bhawan"},{"id":"725879816","lat":"27.6855201","lng":"85.3181419","tag":{"name":"Jwagal","public_transport":"stop_position"},"name":"Jwagal"},{"id":"317532028","lat":"27.6917679","lng":"85.3180287","tag":{"name":"Thapathali","public_transport":"stop_position"},"name":"Thapathali"},{"id":"1817322707","lat":"27.6940787","lng":"85.3193087","tag":{"name":"Maitighar","public_transport":"stop_position"},"name":"Maitighar"},{"id":"1273375058","lat":"27.6925789","lng":"85.3239053","tag":{"name":"Babarmahal","public_transport":"stop_position"},"name":"Babarmahal"},{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"name":"koteshwore"},{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"name":"koteshwore"},{"id":"360455521","lat":"27.6671965","lng":"85.3223108","tag":{"name":"Lagankhel bus stop","public_transport":"stop_position"},"name":"Lagankhel bus stop"}],"segments":[{"id":"164827914","listOfLatLng":[["27.6724821","85.3141222"],["27.6726840","85.3140430"],["27.6727755","85.3139726"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[]},{"id":"170558234","listOfLatLng":[["27.6727755","85.3139726"],["27.6728781","85.3140194"],["27.6729377","85.3140233"],["27.6729950","85.3140124"],["27.6730518","85.3139858"]],"tag":{"highway":"primary","junction":"roundabout","name":"Jawalakhel","oneway":"-1","route":"junction"},"orderedListofStops":[]},{"id":"136524582","listOfLatLng":[["27.6730518","85.3139858"],["27.6732546","85.3141572"],["27.6735227","85.3141874"]],"tag":{"highway":"primary_link","oneway":"yes"},"orderedListofStops":[]},{"id":"137312035","listOfLatLng":[["27.6735227","85.3141874"],["27.6736562","85.3142437"],["27.6745199","85.3145388"],["27.6745621","85.3145773"],["27.6747246","85.3147255"],["27.6754895","85.3155323"],["27.6756745","85.3156816"],["27.6759720","85.3159258"],["27.6769057","85.3161841"],["27.6771777","85.3162869"],["27.6775010","85.3163223"],["27.6779055","85.3163021"],["27.6780442","85.3164333"],["27.6784829","85.3165005"],["27.6801275","85.3171663"],["27.6802744","85.3173415"],["27.6804668","85.3173183"],["27.6810962","85.3176805"],["27.6820129","85.3179489"],["27.6820799","85.3180865"],["27.6825630","85.3182343"],["27.6828998","85.3184822"],["27.6831654","85.3186726"],["27.6835416","85.3189057"],["27.6847494","85.3185115"],["27.6849624","85.3183959"],["27.6855201","85.3181419"],["27.6867815","85.3171654"],["27.6873512","85.3168186"],["27.6876119","85.3166398"],["27.6877042","85.3165571"],["27.6879313","85.3162838"],["27.6880137","85.3161566"]],"tag":{"highway":"primary","oneway":"no"},"orderedListofStops":[{"id":"1278980875","lat":"27.6759720","lng":"85.3159258","tag":{"name":"Damkal","public_transport":"stop_position"},"is_stop":true},{"id":"317532042","lat":"27.6780442","lng":"85.3164333","tag":{"name":"Pulchowk","public_transport":"stop_position"},"is_stop":true},{"id":"317532037","lat":"27.6810962","lng":"85.3176805","tag":{"name":"Harihar Bhawan","public_transport":"stop_position"},"is_stop":true},{"id":"725879816","lat":"27.6855201","lng":"85.3181419","tag":{"name":"Jwagal","public_transport":"stop_position"},"is_stop":true}]},{"id":"136448418","listOfLatLng":[["27.6880137","85.3161566"],["27.6882845","85.3161840"],["27.6884830","85.3161580"],["27.6886545","85.3162379"],["27.6888063","85.3163932"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[]},{"id":"136448419","listOfLatLng":[["27.6888063","85.3163932"],["27.6899793","85.3174133"]],"tag":{"bridge":"yes","highway":"primary","name":"Bagmati Bridge","oneway":"yes"},"orderedListofStops":[]},{"id":"136448417","listOfLatLng":[["27.6899793","85.3174133"],["27.6902465","85.3176013"],["27.6904897","85.3176659"],["27.6906683","85.3177102"],["27.6907812","85.3177185"],["27.6910488","85.3176517"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[]},{"id":"118505089","listOfLatLng":[["27.6910488","85.3176517"],["27.6917679","85.3180287"],["27.6925408","85.3183982"],["27.6931494","85.3187097"],["27.6935486","85.3189452"],["27.6938205","85.3191204"],["27.6940787","85.3193087"],["27.6942727","85.3194502"],["27.6944223","85.3196562"],["27.6945079","85.3197810"]],"tag":{"highway":"primary","oneway":"no"},"orderedListofStops":[{"id":"317532028","lat":"27.6917679","lng":"85.3180287","tag":{"name":"Thapathali","public_transport":"stop_position"},"is_stop":true},{"id":"1817322707","lat":"27.6940787","lng":"85.3193087","tag":{"name":"Maitighar","public_transport":"stop_position"},"is_stop":true}]},{"id":"111846941","listOfLatLng":[["27.6945079","85.3197810"],["27.6944566","85.3199749"],["27.6943274","85.3202545"],["27.6939511","85.3210034"],["27.6937985","85.3213150"],["27.6932539","85.3224640"],["27.6926482","85.3237579"],["27.6926142","85.3238331"],["27.6925789","85.3239053"],["27.6921318","85.3248302"],["27.6918991","85.3252994"],["27.6917453","85.3256097"],["27.6916362","85.3258353"],["27.6913980","85.3263105"],["27.6905772","85.3280262"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[{"id":"1273375058","lat":"27.6925789","lng":"85.3239053","tag":{"name":"Babarmahal","public_transport":"stop_position"},"is_stop":true}]},{"id":"111846942","listOfLatLng":[["27.6905772","85.3280262"],["27.6902829","85.3286563"]],"tag":{"bridge":"yes","highway":"primary","name":"Bijulibazar Bridge","name:ne":"बिजुलिबजार पुल","oneway":"yes"},"orderedListofStops":[]},{"id":"27034032","listOfLatLng":[["27.6902829","85.3286563"],["27.6901471","85.3289729"],["27.6897339","85.3298528"],["27.6895311","85.3303795"],["27.6893729","85.3308763"],["27.6893021","85.3311440"],["27.6892219","85.3314617"],["27.6890904","85.3320348"],["27.6889708","85.3326257"],["27.6889087","85.3329293"],["27.6888693","85.3331164"],["27.6888259","85.3333183"],["27.6887141","85.3338112"],["27.6885906","85.3343784"],["27.6884367","85.3349619"],["27.6882932","85.3355438"],["27.6881863","85.3359364"],["27.6879470","85.3371352"],["27.6877136","85.3383041"],["27.6876923","85.3383990"],["27.6875548","85.3389856"],["27.6874685","85.3393585"],["27.6871137","85.3409704"],["27.6869595","85.3416555"],["27.6867550","85.3425643"],["27.6865957","85.3432084"],["27.6865724","85.3433756"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[]},{"id":"27034031","listOfLatLng":[["27.6865724","85.3433756"],["27.6863470","85.3443509"]],"tag":{"bridge":"yes","highway":"primary","layer":"1","name":"Bagmati Bridge"},"orderedListofStops":[]},{"id":"170533898","listOfLatLng":[["27.6863470","85.3443509"],["27.6862294","85.3449020"],["27.6861966","85.3450560"],["27.6861245","85.3453740"],["27.6860810","85.3455656"],["27.6859712","85.3459865"],["27.6855072","85.3473469"]],"tag":{"highway":"primary","oneway":"yes"},"orderedListofStops":[]},{"id":"120032858","listOfLatLng":[["27.6855072","85.3473469"],["27.6848572","85.3482258"],["27.6842072","85.3487892"],["27.6840332","85.3489400"],["27.6834106","85.3492604"],["27.6826662","85.3496015"]],"tag":{"highway":"primary","oneway":"no"},"orderedListofStops":[]},{"id":"170533893","listOfLatLng":[["27.6826662","85.3496015"],["27.6788696","85.3497112"]],"tag":{"bicycle":"yes","bridge":"yes","cycleway":"no","foot":"designated","highway":"trunk","int_name":"Ring Road","lanes":"4","layer":"1","name":"Ring Road","name:en":"Ring Road","name:ne":"चक्रपथ","oneway":"no","source":"Bing","surface":"paved","watch:80n":"Katmandu"},"orderedListofStops":[{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"is_stop":true}]},{"id":"171203197","listOfLatLng":[["27.6788696","85.3497112"],["27.6782186","85.3486132"],["27.6777008","85.3478177"],["27.6773984","85.3473569"],["27.6767224","85.3463499"],["27.6760262","85.3453154"],["27.6756623","85.3447050"],["27.6754108","85.3443327"],["27.6753283","85.3442468"],["27.6742248","85.3430347"],["27.6737665","85.3426099"],["27.6736860","85.3425452"],["27.6735480","85.3424098"],["27.6732841","85.3421770"],["27.6729290","85.3418304"],["27.6728071","85.3417049"],["27.6724945","85.3413943"],["27.6721444","85.3410577"],["27.6717651","85.3406378"],["27.6715986","85.3404600"],["27.6715447","85.3404024"],["27.6712426","85.3400530"],["27.6689436","85.3358103"],["27.6687630","85.3354777"],["27.6684171","85.3348265"],["27.6677724","85.3336019"],["27.6675540","85.3332588"],["27.6673356","85.3329479"],["27.6671358","85.3327276"],["27.6666653","85.3322968"],["27.6666404","85.3322675"],["27.6663205","85.3320064"],["27.6645721","85.3305366"],["27.6642020","85.3302313"],["27.6627287","85.3290238"],["27.6617318","85.3282685"],["27.6611892","85.3278007"],["27.6606202","85.3272862"],["27.6599444","85.3266799"],["27.6593933","85.3259825"],["27.6588231","85.3249547"],["27.6587231","85.3247776"]],"tag":{"bicycle":"yes","bridge":"yes","cycleway":"no","foot":"designated","highway":"trunk","int_name":"Ring Road","lanes":"4","layer":"1","name":"Ring Road","name:en":"Ring Road","name:ne":"चक्रपथ","oneway":"no","source":"Bing","surface":"paved","watch:80n":"Katmandu"},"orderedListofStops":[{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"is_stop":true}]},{"id":"136524570","listOfLatLng":[["27.6587231","85.3247776"],["27.6590441","85.3244219"],["27.6592487","85.3242355"],["27.6594264","85.3241814"],["27.6597256","85.3241106"],["27.6600626","85.3240580"],["27.6603484","85.3239885"],["27.6615673","85.3237361"],["27.6617393","85.3237251"],["27.6619722","85.3238002"],["27.6624138","85.3239461"],["27.6637681","85.3243573"],["27.6639249","85.3243267"],["27.6640784","85.3242436"],["27.6644371","85.3239697"],["27.6646243","85.3239193"],["27.6652263","85.3239134"],["27.6654793","85.3238649"],["27.6665939","85.3235556"],["27.6667000","85.3234781"],["27.6667749","85.3233764"],["27.6669642","85.3226801"],["27.6671094","85.3224462"],["27.6671965","85.3223108"],["27.6681638","85.3216823"],["27.6683741","85.3216968"],["27.6691148","85.3219602"],["27.6695694","85.3219519"],["27.6697478","85.3218274"],["27.6699550","85.3216872"],["27.6700381","85.3215144"],["27.6702849","85.3210298"],["27.6706020","85.3204158"],["27.6707244","85.3201529"],["27.6711377","85.3193590"],["27.6712586","85.3191308"],["27.6712966","85.3190449"],["27.6715315","85.3184838"],["27.6716446","85.3181024"],["27.6718565","85.3173801"],["27.6719605","85.3167750"],["27.6720418","85.3160376"],["27.6721237","85.3155420"],["27.6721755","85.3153365"],["27.6724821","85.3141222"]],"tag":{"highway":"primary"},"orderedListofStops":[{"id":"360455521","lat":"27.6671965","lng":"85.3223108","tag":{"name":"Lagankhel bus stop","public_transport":"stop_position"},"is_stop":true}]}],"tag":{"name":"Lagankhel-Koteshwor-Tinkune-MaitiGhar-Jawlakhel","ref":"14B","route":"tempo","type":"route"},"name":"Lagankhel-Koteshwor-Tinkune-MaitiGhar-Jawlakhel","ref":"14B","transport":"tempo","orientingSegmentID":"137312035"},{"id":"2276999","stops":[{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"name":"koteshwore"},{"id":"31150613","lat":"27.6953699","lng":"85.3547048","tag":{"name":"Sinamangal","public_transport":"stop_position"},"name":"Sinamangal"},{"id":"1347468341","lat":"27.7009154","lng":"85.3418155","tag":{"name":"Bhimsengola stop","public_transport":"stop_position"},"name":"Bhimsengola stop"},{"id":"1281218812","lat":"27.7038954","lng":"85.3328246","tag":{"name":"Maiti Devi chowk","public_transport":"stop_position"},"name":"Maiti Devi chowk"},{"id":"1274038133","lat":"27.7064116","lng":"85.3338253","tag":{"name":"Maitidevi Temple stop","public_transport":"stop_position"},"name":"Maitidevi Temple stop"},{"id":"1490234323","lat":"27.7098049","lng":"85.3270834","tag":{"name":"Ciy Center Stop","public_transport":"stop_position"},"name":"Ciy Center Stop"},{"id":"1279198122","lat":"27.7103689","lng":"85.3222810","tag":{"public_transport":"stop_position"}},{"id":"1273357490","lat":"27.7079957","lng":"85.3212617","tag":{"name":"Kamaladi Road (कमलादी) stop","public_transport":"stop_position"},"name":"Kamaladi Road (कमलादी) stop"},{"id":"1806066069","lat":"27.7080425","lng":"85.3171161","tag":{"name":"Ghantaghar (घण्टाघर) stop","public_transport":"stop_position"},"name":"Ghantaghar (घण्टाघर) stop"},{"id":"313917671","lat":"27.7088290","lng":"85.3152920","tag":{"name":"Ghantaghar (घण्टाघर) stop","public_transport":"stop_position"},"name":"Ghantaghar (घण्टाघर) stop"},{"id":"728153897","lat":"27.7173801","lng":"85.3148107","tag":{"public_transport":"stop_position"}},{"id":"268545728","lat":"27.7182038","lng":"85.3121379","tag":{"public_transport":"stop_position"}}],"segments":[{"id":"120261813","listOfLatLng":[["27.6826662","85.3496015"],["27.6834660","85.3494942"],["27.6844702","85.3494937"],["27.6849899","85.3495255"],["27.6854619","85.3496744"],["27.6859128","85.3498681"],["27.6872567","85.3506395"]],"tag":{"highway":"trunk","int_name":"Ring Road","name":"चक्रपथ","oneway":"no"},"orderedListofStops":[{"id":"31230922","lat":"27.6872567","lng":"85.3506395","tag":{"public_transport":"stop_position"},"is_stop":true}]},{"id":"170533893","listOfLatLng":[["27.6826662","85.3496015"],["27.6788696","85.3497112"]],"tag":{"bicycle":"yes","bridge":"yes","cycleway":"no","foot":"designated","highway":"trunk","int_name":"Ring Road","lanes":"4","layer":"1","name":"Ring Road","name:en":"Ring Road","name:ne":"चक्रपथ","oneway":"no","source":"Bing","surface":"paved","watch:80n":"Katmandu"},"orderedListofStops":[{"id":"31228768","lat":"27.6788696","lng":"85.3497112","tag":{"name":"koteshwore","public_transport":"stop_position"},"is_stop":true}]},{"id":"171215516","listOfLatLng":[["27.7173801","85.3148107"],["27.7178331","85.3132304"],["27.7182038","85.3121379"],["27.7182170","85.3120463"],["27.7182871","85.3115614"]],"tag":{"highway":"tertiary"},"orderedListofStops":[{"id":"728153897","lat":"27.7173801","lng":"85.3148107","tag":{"public_transport":"stop_position"},"is_stop":true},{"id":"268545728","lat":"27.7182038","lng":"85.3121379","tag":{"public_transport":"stop_position"},"is_stop":true}]},{"id":"120432733","listOfLatLng":[["27.7170344","85.3160429"],["27.7173801","85.3148107"]],"tag":{"highway":"tertiary"},"orderedListofStops":[{"id":"728153897","lat":"27.7173801","lng":"85.3148107","tag":{"public_transport":"stop_position"},"is_stop":true}]},{"id":"28543722","listOfLatLng":[["27.7087563","85.3146251"],["27.7088974","85.3146062"],["27.7100490","85.3147882"],["27.7104014","85.3148472"],["27.7115275","85.3150203"],["27.7115707","85.3150269"],["27.7137405","85.3154212"],["27.7170344","85.3160429"]],"tag":{"bicycle":"yes","cycleway":"lane","foot":"yes","highway":"primary","lanes":"2","name":"Kantipath","surface":"paved"},"orderedListofStops":[]},{"id":"4840092","listOfLatLng":[["27.7087563","85.3146251"],["27.7087458","85.3148275"],["27.7088290","85.3152920"],["27.7089993","85.3158799"],["27.7092963","85.3167370"]],"tag":{"highway":"primary","name":"Jamal Way","oneway":"yes"},"orderedListofStops":[{"id":"313917671","lat":"27.7088290","lng":"85.3152920","tag":{"name":"Ghantaghar (घण्टाघर) stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"169442474","listOfLatLng":[["27.7092963","85.3167370"],["27.7093247","85.3169050"],["27.7092821","85.3170130"],["27.7091984","85.3170767"],["27.7090647","85.3171041"]],"tag":{"highway":"primary_link","name":"Jamal Way","oneway":"yes"},"orderedListofStops":[]},{"id":"28579443","listOfLatLng":[["27.7090647","85.3171041"],["27.7081002","85.3168181"]],"tag":{"highway":"primary","name":"Durbar Marg","oneway":"yes"},"orderedListofStops":[]},{"id":"4840057","listOfLatLng":[["27.7080033","85.3218553"],["27.7079957","85.3212617"],["27.7079870","85.3205974"],["27.7080005","85.3198849"],["27.7080024","85.3190296"],["27.7080596","85.3181353"],["27.7080267","85.3175553"],["27.7080425","85.3171161"],["27.7081002","85.3168181"]],"tag":{"bicycle":"yes","cycleway":"lane","foot":"designated","highway":"primary","lanes":"2","name":"Kamaladi Road (कमलादी)","oneway":"no","surface":"paved"},"orderedListofStops":[{"id":"1273357490","lat":"27.7079957","lng":"85.3212617","tag":{"name":"Kamaladi Road (कमलादी) stop","public_transport":"stop_position"},"is_stop":true},{"id":"1806066069","lat":"27.7080425","lng":"85.3171161","tag":{"name":"Ghantaghar (घण्टाघर) stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"4840054","listOfLatLng":[["27.7080033","85.3218553"],["27.7081802","85.3218606"],["27.7097482","85.3220986"]],"tag":{"highway":"secondary"},"orderedListofStops":[]},{"id":"171215514","listOfLatLng":[["27.7097482","85.3220986"],["27.7103898","85.3221723"]],"tag":{"highway":"secondary"},"orderedListofStops":[]},{"id":"120031048","listOfLatLng":[["27.7103898","85.3221723"],["27.7103689","85.3222810"],["27.7103487","85.3224451"],["27.7103233","85.3227055"],["27.7102770","85.3232406"],["27.7101863","85.3244940"],["27.7101238","85.3252577"],["27.7100552","85.3259996"],["27.7099528","85.3262248"]],"tag":{"highway":"secondary","name":"Kamalpokhari Road","oneway":"true"},"orderedListofStops":[{"id":"1279198122","lat":"27.7103689","lng":"85.3222810","tag":{"public_transport":"stop_position"},"is_stop":true}]},{"id":"120430421","listOfLatLng":[["27.7096477","85.3278347"],["27.7098049","85.3270834"],["27.7098412","85.3268479"],["27.7099528","85.3262248"]],"tag":{"highway":"secondary","name":"Kamalpokhari Road"},"orderedListofStops":[{"id":"1490234323","lat":"27.7098049","lng":"85.3270834","tag":{"name":"Ciy Center Stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"61164307","listOfLatLng":[["27.7096477","85.3278347"],["27.7094432","85.3285455"],["27.7092497","85.3293137"],["27.7091353","85.3297547"],["27.7090187","85.3302503"],["27.7089482","85.3306266"],["27.7086575","85.3319720"],["27.7086202","85.3322330"],["27.7084226","85.3328990"],["27.7083006","85.3332857"],["27.7082812","85.3334447"]],"tag":{"highway":"secondary","name":"Kamalpokhari Road","oneway":"yes"},"orderedListofStops":[]},{"id":"111965846","listOfLatLng":[["27.7082812","85.3334447"],["27.7080715","85.3334927"],["27.7076538","85.3334702"],["27.7073579","85.3334943"],["27.7071530","85.3335308"],["27.7070150","85.3335801"],["27.7069649","85.3335839"],["27.7066888","85.3336906"],["27.7064116","85.3338253"],["27.7062390","85.3339237"],["27.7060949","85.3339162"],["27.7059179","85.3338406"],["27.7054264","85.3335844"],["27.7052136","85.3334648"],["27.7039196","85.3327444"]],"tag":{"highway":"residential","oneway":"yes"},"orderedListofStops":[{"id":"1274038133","lat":"27.7064116","lng":"85.3338253","tag":{"name":"Maitidevi Temple stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"111965821","listOfLatLng":[["27.7029808","85.3357823"],["27.7030157","85.3356906"],["27.7030395","85.3356130"],["27.7035469","85.3339594"],["27.7038954","85.3328246"],["27.7039196","85.3327444"]],"tag":{"highway":"secondary","name":"Dilli Bazaar Road"},"orderedListofStops":[{"id":"1281218812","lat":"27.7038954","lng":"85.3328246","tag":{"name":"Maiti Devi chowk","public_transport":"stop_position"},"is_stop":true}]},{"id":"111965837","listOfLatLng":[["27.7028257","85.3363107"],["27.7029808","85.3357823"]],"tag":{"bridge":"yes","highway":"secondary"},"orderedListofStops":[]},{"id":"121782640","listOfLatLng":[["27.7015579","85.3401942"],["27.7019531","85.3392096"],["27.7021324","85.3387015"],["27.7024282","85.3377291"],["27.7026552","85.3368783"],["27.7026751","85.3368179"],["27.7027710","85.3365000"],["27.7028257","85.3363107"]],"tag":{"highway":"secondary","name":"Baburam Acharya Marga"},"orderedListofStops":[]},{"id":"4840039","listOfLatLng":[["27.7014990","85.3403728"],["27.7015579","85.3401942"]],"tag":{"highway":"secondary","name":"Dilli Bazaar Road"},"orderedListofStops":[{"id":"31150643","lat":"27.7014990","lng":"85.3403728","tag":{"name":"Old Baneshwor stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"27034028","listOfLatLng":[["27.6990989","85.3465370"],["27.6991777","85.3463574"]],"tag":{"highway":"secondary","name":"Sinamangal Road"},"orderedListofStops":[]},{"id":"27034027","listOfLatLng":[["27.6989602","85.3470630"],["27.6990989","85.3465370"]],"tag":{"bridge":"yes","comment":"This bridge broke in 2008, and no longer supports cars.","highway":"pedestrian","layer":"1","motor_vehicle":"no","name":"Sinamangal Road","source":"local_knowledge"},"orderedListofStops":[]},{"id":"4840223","listOfLatLng":[["27.6952793","85.3551279"],["27.6953699","85.3547048"],["27.6953955","85.3544035"],["27.6955076","85.3540175"],["27.6956506","85.3535548"],["27.6956914","85.3532305"],["27.6958676","85.3528159"],["27.6961426","85.3522724"],["27.6965055","85.3516891"],["27.6968828","85.3510968"],["27.6972168","85.3505969"],["27.6975108","85.3501347"],["27.6977276","85.3497863"],["27.6980615","85.3492531"],["27.6982750","85.3489175"],["27.6984655","85.3485453"]],"tag":{"highway":"secondary","name":"Sinamangal Road"},"orderedListofStops":[{"id":"31150664","lat":"27.6952793","lng":"85.3551279","tag":{"name":"Sinamangal सिनामंगल","name:en":"Sinamangal","name:ne":"सिनामंगल","public_transport":"stop_position"},"is_stop":true},{"id":"31150613","lat":"27.6953699","lng":"85.3547048","tag":{"name":"Sinamangal","public_transport":"stop_position"},"is_stop":true},{"id":"31150618","lat":"27.6958676","lng":"85.3528159","tag":{"name":"KCM stop","public_transport":"stop_position"},"is_stop":true},{"id":"31150627","lat":"27.6984655","lng":"85.3485453","tag":{"name":"Sinamangal stop","public_transport":"stop_position"},"is_stop":true}]},{"id":"171215512","listOfLatLng":[["27.6952793","85.3551279"],["27.6942834","85.3546537"],["27.6934849","85.3541854"],["27.6924062","85.3535685"],["27.6908525","85.3526935"],["27.6906102","85.3525566"],["27.6888942","85.3515767"],["27.6872567","85.3506395"]],"tag":{"bicycle":"yes","bridge":"yes","cycleway":"no","foot":"designated","highway":"trunk","int_name":"Ring Road","lanes":"4","layer":"1","name":"Ring Road","name:en":"Ring Road","name:ne":"चक्रपथ","oneway":"no","source":"Bing","surface":"paved","watch:80n":"Katmandu"},"orderedListofStops":[{"id":"31150664","lat":"27.6952793","lng":"85.3551279","tag":{"name":"Sinamangal सिनामंगल","name:en":"Sinamangal","name:ne":"सिनामंगल","public_transport":"stop_position"},"is_stop":true},{"id":"31230922","lat":"27.6872567","lng":"85.3506395","tag":{"public_transport":"stop_position"},"is_stop":true}]}],"tag":{"name":"Shobhabhagwati-Jamal-Ghantaghar-Krishna Pauroti-Gaushala-Maitidevi-Purano Baneshwar-Sinamangal-Tinkune-Koteshwar","network":"safatempo","ref":"Annapurna A","route":"tempo","type":"route"},"name":"Shobhabhagwati-Jamal-Ghantaghar-Krishna Pauroti-Gaushala-Maitidevi-Purano Baneshwar-Sinamangal-Tinkune-Koteshwar","ref":"Annapurna A","transport":"tempo"}]'));
