function hitung(){
    let dewasa = document.getElementById("pengunjung_dewasa").value;
    let anak = document.getElementById("pengunjung_anak").value;
    var wisata=document.getElementById("tempat_wisata").value;
    dewasa = parseInt(dewasa);
    anak = parseInt(anak);

    if (wisata=="Monumen Nasional") {
        let harga_anak=8000;
        let harga_dewasa=15000;
        harga_anak = parseInt(harga_anak);
        harga_dewasa = parseInt(harga_dewasa);
        
        total_harga = (harga_anak*anak)+(harga_dewasa*dewasa);
        document.getElementById("total").innerHTML=total_harga;
    } 
    else if (wisata=="Museum Fatahillah"){
        let harga_anak=2000;
        let harga_dewasa=5000;
        harga_anak = parseInt(harga_anak);
        harga_dewasa = parseInt(harga_dewasa);
        
        total_harga = (harga_anak*anak)+(harga_dewasa*dewasa);
        document.getElementById("total").innerHTML=total_harga;
    }
    else if (wisata=="Ragunan"){
        let harga_anak=3000;
        let harga_dewasa=4000;
        harga_anak = parseInt(harga_anak);
        harga_dewasa = parseInt(harga_dewasa);
        
        total_harga = (harga_anak*anak)+(harga_dewasa*dewasa);
        document.getElementById("total").innerHTML=total_harga;
    }
    else if (wisata=="TMII"){
        let harga_anak=25000;
        let harga_dewasa=25000;
        harga_anak = parseInt(harga_anak);
        harga_dewasa = parseInt(harga_dewasa);
        
        total_harga = (harga_anak*anak)+(harga_dewasa*dewasa);
        document.getElementById("total").innerHTML=total_harga;
    }
}