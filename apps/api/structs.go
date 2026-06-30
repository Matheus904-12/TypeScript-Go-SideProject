package main

import (
	"encoding/json"
	"net/http"
	"time"
)

// Tag para o front - Return Json
type VolunteerModel struct {
	ID string `json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`
	CPF string `json:"cpf"`
	IsActive bool `json:"isActive"`
	CreatedAt time.Time `json:"createdAt"`
}

// Não é um OMIT - mas sim campos mandatorios
type CreateVolunteerInput struct {
	Name string `json:"name"`
	Email string `json:"email"`
	CPF string `json:"cpf"`
}

// "Tipo um Partial" -> O que significa "omitempty"?
type UpdateVolunteerInput struct {
	Name *string `json:"name,omitempty"`
	Email *string `json:"email,omitempty"`
	CPF *string `json:"cpf,omitempty"`
}

func main() {
	http.HandleFunc("/volunteer", func(w http.ResponseWriter, r *http.Request) {
		vol := VolunteerModel{
			ID: "001",
			Name: "Matheus",
			Email: "matheus.@resgate.io",
			CPF: "555.000.333-00",
			IsActive: true,
			CreatedAt: time.Now(),
		}

		w.Header().Set("Content-Type", "application/json") //CORS correção para o browser não bloquear
		w.Header().Set("Access-Control-Allow-Origin", "*")
		json.NewEncoder(w).Encode(vol)
	})

	println("Servidor rodando...")
	http.ListenAndServe(":8000", nil)
}