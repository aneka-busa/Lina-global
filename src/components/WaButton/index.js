import React, { Component } from "react"
import wa from "../images/wa.png"
import "./style.scss"
class WaButton extends Component {
  render() {
    return <a className="wa-button-wrapper" 
    target="_blank" 
    href="https://api.whatsapp.com/send?phone= 6285200203604&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%21%0A%0ANama%20%3A%0ANama_Produk%20%3A%20%0AKode_Barang%20%3A%20%0AMotif%20%3A%20%0AAlamat_lengkap%20%3A%20%0A"
    rel="noopener noreferrer">
      <img src={wa} alt=""  width="60px"/>
    </a>
  }
}

export default WaButton
