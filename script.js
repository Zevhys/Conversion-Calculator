var user_input = 0;

var panjang = ["mm", "cm", "m", "km", "in", "ft", "yd", "mi", "nm", "mil"];

var suhu = ["c", "f", "k"];

function ganti_kategori(kategori) {
  switch (kategori) {
    case "panjang":
      break;

    case "suhu":
      break;

    default:
      break;
  }
}

function pilihan(nama) {
  const option = document.createElement("option");
}

function konversi(num) {
  document.getElementById("user-output-var").value = cm_to_m(num);
}

function cm_to_m(num) {
  return num / 100;
}

function m_to_cm(num) {
  return num * 100;
}
