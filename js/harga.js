function harga() {
    var wisata=document.getElementById("tempat_wisata").value;

    if (wisata=="Monumen Nasional") {
        document.getElementById("wisata_dewasa").innerHTML="15000";
        document.getElementById("wisata_anak").innerHTML="8000";
    } 
    else if (wisata=="Museum Fatahillah"){
        document.getElementById("wisata_dewasa").innerHTML="5000";
        document.getElementById("wisata_anak").innerHTML="2000";
    }
    else if (wisata=="Ragunan"){
        document.getElementById("wisata_dewasa").innerHTML="4000";
        document.getElementById("wisata_anak").innerHTML="3000";
    }
    else if (wisata=="TMII"){
        document.getElementById("wisata_dewasa").innerHTML="25000";
        document.getElementById("wisata_anak").innerHTML="25000";
    } else{
        document.getElementById("wisata_dewasa").innerHTML="0";
        document.getElementById("wisata_anak").innerHTML="0";
    }
}