export default function toRem() {
  const docE=document.querySelector("html")
  const rem = 100/375
  docE.style.fontSize = rem + 'vw'

}