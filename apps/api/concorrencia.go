package main

import (
	"fmt"
	"time"
)

// Simulando o processamento pesado de um pedido de resgate (ex: calcular rota)
func processRescue(id int) {
	fmt.Printf("🚁 Despachando barco para o resgate #%d...\n", id)
	time.Sleep(2 * time.Second) // Congela por 2 segundos simulando lentidão
	fmt.Printf("✅ Resgate #%d concluído com sucesso!\n", id)
}

func main() {
	fmt.Println("--- MODO SÍNCRONO (Um por vez) ---")
	startTime := time.Now()
	
	for i := 1; i <= 3; i++ {
		processRescue(i)
	}
	
	fmt.Printf("⏳ Tempo total SÍNCRONO: %v\n\n", time.Since(startTime))
	
	// ==========================================
	
	fmt.Println("--- MODO GOROUTINES (O Superpoder do Go) ---")
	startTimeGo := time.Now()
	
	// A mágica é a palavra "go" antes da função!
	for i := 4; i <= 6; i++ {
		go processRescue(i)
	}
	
	// Essa pausa de 3s é para o programa não fechar antes das Goroutines terminarem
	time.Sleep(3 * time.Second)
	
	fmt.Printf("⚡ Tempo total COM Go: %v\n", time.Since(startTimeGo))
}
