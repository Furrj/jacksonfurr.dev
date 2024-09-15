package main

import (
	"log"
	"net/http"
	"path/filepath"
)

const PORT string = ":5000"

func main() {
	clientPath := filepath.Join("..", "client")
	fileServer := http.FileServer(http.Dir(clientPath))

	http.Handle("/", fileServer)

	log.Printf("Server started on port %s", PORT)
	err := http.ListenAndServe(PORT, nil)
	if err != nil {
		log.Fatal(err)
	}
}
