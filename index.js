
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr')
    .then((data) => {
        console.log(data);
        return data.json();
    }).then((actualdata) => {

        const mydata_btcn = actualdata.bitcoin.inr;
        document.getElementById('btcn').innerHTML = mydata_btcn

        const mydata_eth = actualdata.ethereum.inr;
        document.getElementById('eth').innerHTML = mydata_eth

        const mydata_doge = actualdata.dogecoin.inr;
        document.getElementById('doge').innerHTML = mydata_doge

    }).catch((error) => {
        // console.log('Error: ${error}');
        console.error(error);
    })
