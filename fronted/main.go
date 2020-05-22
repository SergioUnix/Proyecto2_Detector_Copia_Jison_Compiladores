package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, "")
}
func errores(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("errores.html"))
	t.Execute(w, "")
}

func main() {
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	http.Handle("/codemirror/", http.StripPrefix("/codemirror/", http.FileServer(http.Dir("codemirror/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	http.Handle("/website/", http.StripPrefix("/website/", http.FileServer(http.Dir("website/"))))
	http.HandleFunc("/", index)
	http.HandleFunc("/errores", errores)

	fmt.Printf("Servidor escuchando en: http://localhost:4200/")
	http.ListenAndServe(":4200", nil)
}
