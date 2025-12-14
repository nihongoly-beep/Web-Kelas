function showAlbum(nomor) {

  document.getElementById("album-1").style.display = "none";
  document.getElementById("album-2").style.display = "none";
  document.getElementById("album-3").style.display = "none";

  document.getElementById("album-" + nomor).style.display = "grid";
}