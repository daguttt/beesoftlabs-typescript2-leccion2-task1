function DNAtoRNA(dna: string): string {
  return dna.replace(/[tT]/g, "U")
}
DNAtoRNA("CGCCAATTGACCACCGCGCGTCCTGACACGAGATAGGGAATC")