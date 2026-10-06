# asset-map.md

## BLOSS Eletricidade — Asset Map Revisado

**Status:** implementation-ready  
**Objetivo:** usar somente assets reais presentes em `Imagens Bloss.zip`, sem stock, sem IA e sem `ASSET_MISSING`.  
**Source of Visual Truth:** `approved-desktop.png` + `approved-mobile.png`  
**Source of Technical Truth:** `implementation-spec.md`

---

# 0. Regras

1. Não inventar imagens.
2. Não usar stock.
3. Não substituir um arquivo mapeado por outro sem atualizar este documento.
4. Os nomes abaixo são os nomes exatos encontrados dentro de `Imagens Bloss.zip`.
5. É permitido criar derivados otimizados em AVIF/WebP, desde que sejam apenas crop/compressão/correção leve de cor.
6. Não remover textos, pessoas, objetos ou logos por IA/inpainting.
7. Quando uma foto original contém texto de post do Instagram, só pode ser usada se o crop excluir 100% desse texto.
8. Reutilização de um mesmo asset em duas áreas só ocorre quando explicitamente definida neste mapa.
9. `object-position` deve ser específico por seção.
10. Hero é o único asset fotográfico com prioridade `LCP`.

---

# 1. Inventário completo e destino de cada arquivo

| SOURCE_FILE | DESTINO / USO |
|---|---|
| `Imagens Bloss/Logo Bloos ok.png` | Header + Footer |
| `Imagens Bloss/Favicon Bloss.png` | `public/favicon.png` |
| `Imagens Bloss/whatsapp_float.png` | WhatsApp flutuante |
| `Imagens Bloss/imgi_20_645618175_18083465300600356_3257977585925924954_n.webp` | Hero desktop + mobile |
| `Imagens Bloss/imgi_21_637233637_18081713804600356_8603098672081125203_n.jpg` | Serviço: Instalações elétricas |
| `Imagens Bloss/imgi_31_669862473_18307660462273196_4843631114602791621_n.jpg` | Serviço: Ar-condicionado Split + Projeto: Instalação de ar-condicionado |
| `Imagens Bloss/imgi_17_670937440_18089925869600356_6417007879746538124_n.webp` | Serviço: Manutenção e reparos + bloco mobile de Climatização |
| `Imagens Bloss/imgi_25_560304743_18067714658600356_1070131253366214301_n.jpg` | Serviço: Projetos e consultoria |
| `Imagens Bloss/imgi_8_669658421_18088477829600356_2168918359444439195_n.webp` | Diferenciais desktop + Autoridade mobile |
| `Imagens Bloss/imgi_10_780157979_18107915249600356_7472861473561162031_n.webp` | Projeto: Infraestrutura elétrica |
| `Imagens Bloss/imgi_12_730164366_18099279254600356_2569045858099444358_n.jpg` | Projeto: Quadro e infraestrutura + CTA final |
| `Imagens Bloss/imgi_29_505446825_18053595314600356_586042543300605580_n.jpg` | Projeto: Infraestrutura externa |
| `Imagens Bloss/imgi_19_653516773_18085331165600356_5297189268647756272_n.webp` | NÃO USAR no layout aprovado — post com texto embutido |
| `Imagens Bloss/imgi_23_620460337_18078703811600356_7048766265760735997_n.webp` | NÃO USAR no layout aprovado — asset reserva de frota/operação |
| `Imagens Bloss/imgi_24_561136431_18067722758600356_3438173429783269478_n.jpg` | NÃO USAR no layout aprovado — asset reserva/localidade |
| `Imagens Bloss/imgi_28_514239055_18055490783600356_4069340214321358682_n.webp` | NÃO USAR no layout aprovado — asset reserva/operação externa |

---

# 2. Brand Assets

## SECTION
Header + Footer

**PURPOSE:** Identificação principal da marca.

**SOURCE_FILE:**  
`Imagens Bloss/Logo Bloos ok.png`

**DESKTOP_USAGE:**  
Logo no canto superior esquerdo do Header e repetido no Footer.

**MOBILE_USAGE:**  
Logo no Header mobile e no início do Footer.

**DESKTOP_CROP:**  
Sem crop.

**MOBILE_CROP:**  
Sem crop.

**FOCAL_POINT:**  
Logo completo.

**ASPECT_RATIO:**  
`3:1`

**OBJECT_POSITION:**  
`center center`

**PRIORITY:**  
`ABOVE_FOLD`

**ALT_TEXT:**  
`Bloss Eletricidade`

---

## SECTION
Favicon

**SOURCE_FILE:**  
`Imagens Bloss/Favicon Bloss.png`

**DESTINATION:**  
`public/favicon.png`

**CROP:**  
Sem crop.

**PRIORITY:**  
`ABOVE_FOLD`

---

## SECTION
WhatsApp flutuante

**SOURCE_FILE:**  
`Imagens Bloss/whatsapp_float.png`

**DESKTOP_USAGE:**  
Controle flutuante discreto.

**MOBILE_USAGE:**  
Somente se não encobrir CTAs, FAQ ou Footer.

**CROP:**  
Sem crop.

**ASPECT_RATIO:**  
`1:1`

**PRIORITY:**  
`NORMAL`

**ALT_TEXT:**  
`Falar com a Bloss pelo WhatsApp`

---

# 3. Hero

## SECTION
Hero

**PURPOSE:**  
Imagem protagonista da página, mostrando execução elétrica real.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_20_645618175_18083465300600356_3257977585925924954_n.webp`

**DESKTOP_USAGE:**  
Background full-bleed. Trabalhador concentrado no centro-direita/direita; área esquerda reservada à copy.

**MOBILE_USAGE:**  
Mesma imagem em crop vertical. Trabalhador continua visível na primeira dobra; não empilhar foto abaixo do texto.

**DESKTOP_CROP:**  
Aberto e horizontal, preservando:
- trabalhador;
- capacete;
- caixa verde;
- conduítes laranja;
- textura da parede.

**MOBILE_CROP:**  
Mais fechado e vertical, com foco no trabalhador + conduítes.

**FOCAL_POINT:**  
Trabalhador + caixa verde + conduítes laranja.

**ASPECT_RATIO:**  
Desktop: `~1.8:1`  
Mobile: `~0.70:1`

**OBJECT_POSITION:**  
Desktop: `62% 50%`  
Mobile: `70% 38%`

**PRIORITY:**  
`LCP`

**ALT_TEXT:**  
`Profissional da Bloss Eletricidade executando infraestrutura elétrica em uma parede de obra.`

---

# 4. Serviços

## SECTION
Serviço — Instalações elétricas

**PURPOSE:**  
Representar infraestrutura elétrica real.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_21_637233637_18081713804600356_8603098672081125203_n.jpg`

**DESKTOP_USAGE:**  
Primeiro card de Serviços.

**MOBILE_USAGE:**  
Primeiro card vertical de Serviços.

**DESKTOP_CROP:**  
Horizontal, focando o caminho dos eletrodutos laranja sobre a malha.

**MOBILE_CROP:**  
Mais aberto, mantendo a interseção principal dos eletrodutos.

**FOCAL_POINT:**  
Interseção dos conduítes laranja.

**ASPECT_RATIO:**  
Desktop: `~1.3:1`  
Mobile: `~1.6:1`

**OBJECT_POSITION:**  
Desktop: `52% 58%`  
Mobile: `50% 60%`

**PRIORITY:**  
`NORMAL`

**ALT_TEXT:**  
`Infraestrutura elétrica com eletrodutos laranja instalados sobre laje.`

---

## SECTION
Serviço — Ar-condicionado Split

**PURPOSE:**  
Mostrar uma instalação residencial real de Split.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_31_669862473_18307660462273196_4843631114602791621_n.jpg`

**DESKTOP_USAGE:**  
Segundo card de Serviços.

**MOBILE_USAGE:**  
Segundo card de Serviços.

**DESKTOP_CROP:**  
Foco na evaporadora no alto da parede e parte do ambiente.

**MOBILE_CROP:**  
Mais amplo que desktop, mantendo o aparelho como protagonista.

**FOCAL_POINT:**  
Unidade interna Split.

**ASPECT_RATIO:**  
Desktop: `~1.3:1`  
Mobile: `~1.6:1`

**OBJECT_POSITION:**  
Desktop: `64% 27%`  
Mobile: `62% 30%`

**PRIORITY:**  
`NORMAL`

**ALT_TEXT:**  
`Ar-condicionado Split instalado em ambiente residencial.`

---

## SECTION
Serviço — Manutenção e reparos

**PURPOSE:**  
Substituir o painel elétrico ilustrado no mockup por uma imagem REAL de manutenção técnica disponível no acervo.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_17_670937440_18089925869600356_6417007879746538124_n.webp`

**DESKTOP_USAGE:**  
Terceiro card de Serviços.

**MOBILE_USAGE:**  
Terceiro card de Serviços.

**DESKTOP_CROP:**  
Usar somente a região inferior/direita do original:
- técnico;
- capacete;
- equipamento externo;
- instrumento de medição.

Todo o texto publicitário embutido do post deve ficar fora do crop.

**MOBILE_CROP:**  
Crop ligeiramente mais aberto da mesma área inferior/direita, ainda excluindo completamente o texto embutido.

**FOCAL_POINT:**  
Técnico e equipamento externo.

**ASPECT_RATIO:**  
Desktop: `~1.3:1`  
Mobile: `~1.6:1`

**OBJECT_POSITION:**  
Depois de criar derivado limpo: `72% 52%`

**PRIORITY:**  
`NORMAL`

**ALT_TEXT:**  
`Técnico realizando serviço em equipamento externo de climatização.`

**IMPORTANT:**  
A foto comprova manutenção técnica/climatização; ela NÃO deve receber ALT dizendo que mostra um quadro elétrico.

---

## SECTION
Serviço — Projetos e consultoria

**PURPOSE:**  
Representar solução executada e acabamento de iluminação.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_25_560304743_18067714658600356_1070131253366214301_n.jpg`

**DESKTOP_USAGE:**  
Quarto card de Serviços.

**MOBILE_USAGE:**  
Quarto card.

**DESKTOP_CROP:**  
Parte superior do ambiente com luminárias acesas.

**MOBILE_CROP:**  
Mais aberto, preservando luminárias e contexto do interior.

**FOCAL_POINT:**  
Luminárias de teto.

**ASPECT_RATIO:**  
Desktop: `~1.3:1`  
Mobile: `~1.6:1`

**OBJECT_POSITION:**  
Desktop: `55% 25%`  
Mobile: `52% 30%`

**PRIORITY:**  
`NORMAL`

**ALT_TEXT:**  
`Ambiente interno com projeto de iluminação instalado.`

---

# 5. Diferenciais / Autoridade

## SECTION
Diferenciais desktop + Autoridade mobile

**PURPOSE:**  
Provar presença operacional da empresa com imóvel e frota identificada.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_8_669658421_18088477829600356_2168918359444439195_n.webp`

**DESKTOP_USAGE:**  
Grande imagem à direita da seção preta “Por que escolher a Bloss”.

**MOBILE_USAGE:**  
Imagem grande da seção de Autoridade próxima ao final da página.

**SOURCE_CONDITION:**  
Há texto publicitário embutido no topo da imagem original.

**DESKTOP_CROP:**  
Usar somente a região inferior do original, excluindo 100% do texto embutido. Manter:
- prédio;
- duas vans;
- logos dos veículos.

**MOBILE_CROP:**  
Crop de paisagem, também pela região inferior.

**FOCAL_POINT:**  
Frota Bloss + prédio.

**ASPECT_RATIO:**  
Desktop: `~1.5:1`  
Mobile: `~1.3:1`

**OBJECT_POSITION:**  
Desktop: `50% 78%`  
Mobile: `50% 82%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Edificação com dois veículos identificados da Bloss Eletricidade em frente.`

**DERIVATIVES RECOMMENDED:**
```text
src/assets/images/autoridade-predio-frota-desktop.webp
src/assets/images/autoridade-predio-frota-mobile.webp
```

---

# 6. Projetos / Portfólio

## SECTION
Projeto 01 — Infraestrutura elétrica

**SOURCE_FILE:**  
`Imagens Bloss/imgi_10_780157979_18107915249600356_7472861473561162031_n.webp`

**DESKTOP_USAGE:**  
Primeiro item do Portfólio.

**MOBILE_USAGE:**  
Primeiro card grande de Projetos.

**DESKTOP_CROP:**  
Preservar conduíte no teto/parede e ambiente em obra.

**MOBILE_CROP:**  
Mais aberto, mantendo a porta e a rota da infraestrutura.

**FOCAL_POINT:**  
Conduíte + parede em obra.

**ASPECT_RATIO:**  
Desktop: `~1.45:1`  
Mobile: `~1.55:1`

**OBJECT_POSITION:**  
Desktop: `58% 38%`  
Mobile: `55% 45%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Infraestrutura elétrica instalada em ambiente interno ainda em obra.`

---

## SECTION
Projeto 02 — Instalação de ar-condicionado

**PURPOSE:**  
Preencher o segundo projeto do mockup usando o único ambiente residencial de Split limpo disponível.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_31_669862473_18307660462273196_4843631114602791621_n.jpg`

**REUSE:**  
Sim. O mesmo source também é usado no card de Serviço “Ar-condicionado Split”.

**DESKTOP_USAGE:**  
Segundo projeto no Portfólio, com crop DIFERENTE do card de Serviços.

**MOBILE_USAGE:**  
Segundo projeto vertical, com composição mais ambiental.

**DESKTOP_CROP:**  
Abrir mais o ambiente:
- aparelho de Split;
- parede;
- parte da cama;
- janela/arquitetura.

**MOBILE_CROP:**  
Usar crop ainda mais contextual, evitando repetir visualmente o card de Serviços.

**FOCAL_POINT:**  
Split + ambiente residencial.

**ASPECT_RATIO:**  
Desktop: `~1.45:1`  
Mobile: `~1.55:1`

**OBJECT_POSITION:**  
Desktop: `58% 35%`  
Mobile: `54% 42%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Ambiente residencial com ar-condicionado Split instalado.`

---

## SECTION
Projeto 03 — Quadro e infraestrutura

**PURPOSE:**  
Preencher o terceiro projeto usando o asset real mais próximo do conceito de infraestrutura elétrica detalhada.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_12_730164366_18099279254600356_2569045858099444358_n.jpg`

**DESKTOP_USAGE:**  
Terceiro item do Portfólio.

**MOBILE_USAGE:**  
Terceiro card de Projetos.

**DESKTOP_CROP:**  
Close horizontal da caixa de passagem e eletrodutos.

**MOBILE_CROP:**  
Crop mais amplo mostrando as linhas dos eletrodutos convergindo para a caixa.

**FOCAL_POINT:**  
Caixa de passagem preta + conduítes laranja.

**ASPECT_RATIO:**  
Desktop: `~1.45:1`  
Mobile: `~1.55:1`

**OBJECT_POSITION:**  
Desktop: `50% 62%`  
Mobile: `50% 64%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Caixa de passagem e eletrodutos instalados sobre laje.`

**CONTENT NOTE:**  
O asset comprova **infraestrutura elétrica**, mas não mostra um quadro de disjuntores.  
Se o texto “Quadro e infraestrutura” for mantido por fidelidade ao mockup, o ALT deve continuar factual como acima.  
Se a copy puder ser refinada sem alterar o layout, “Caixa e infraestrutura” seria semanticamente mais exato.

---

## SECTION
Projeto 04 — Infraestrutura externa

**SOURCE_FILE:**  
`Imagens Bloss/imgi_29_505446825_18053595314600356_586042543300605580_n.jpg`

**DESKTOP_USAGE:**  
Quarto item do Portfólio.

**MOBILE_USAGE:**  
Quarto card de Projetos.

**DESKTOP_CROP:**  
Priorizar eletrodutos sobre estrutura/laje e reduzir mata/área vazia.

**MOBILE_CROP:**  
Um pouco mais contextual, mantendo conduítes dominantes.

**FOCAL_POINT:**  
Rede de eletrodutos laranja.

**ASPECT_RATIO:**  
Desktop: `~1.45:1`  
Mobile: `~1.55:1`

**OBJECT_POSITION:**  
Desktop: `50% 70%`  
Mobile: `50% 67%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Laje em obra com eletrodutos laranja distribuídos sobre a estrutura.`

---

# 7. Avaliações

## SECTION
Avaliações / Depoimentos

**SOURCE_FILE:**  
Nenhuma fotografia de cliente.

**USAGE:**  
Avatar criado por CSS/UI com inicial do avaliador, como no mockup.

**RULE:**  
Não usar retrato inventado, stock ou imagem de rede social.

---

# 8. Localização

## SECTION
Localização / Área atendida

**SOURCE_FILE:**  
Nenhuma fotografia do ZIP.

**USAGE:**  
Mapa real / embed / link para mapa.

**RULE:**  
Não usar uma captura estática inventada baseada no mockup.

**ACCESSIBLE_LABEL:**  
`Mapa da localização da Bloss Eletricidade em Nova Petrópolis, RS.`

---

# 9. Bloco mobile de Climatização

## SECTION
Climatização — mobile only

**SOURCE_FILE:**  
`Imagens Bloss/imgi_17_670937440_18089925869600356_6417007879746538124_n.webp`

**REUSE:**  
Sim. Também usado em “Manutenção e reparos”.

**DESKTOP_USAGE:**  
Não usar como seção independente.

**MOBILE_USAGE:**  
Background fotográfico da seção escura de Climatização antes do FAQ.

**MOBILE_CROP:**  
Criar derivado a partir da região inferior/direita, preservando:
- técnico;
- capacete branco;
- equipamento;
- ferramenta.

Excluir completamente toda a copy embutida no post.

**FOCAL_POINT:**  
Técnico + equipamento externo.

**ASPECT_RATIO:**  
`~0.65:1`

**OBJECT_POSITION:**  
Depois do crop: `70% 45%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Técnico trabalhando em equipamento externo de climatização.`

**DERIVATIVE RECOMMENDED:**  
`src/assets/images/climatizacao-tecnico-mobile.webp`

---

# 10. FAQ

## SECTION
FAQ

**SOURCE_FILE:**  
Nenhum.

**RULE:**  
Interface pura. Não inserir fotografia decorativa.

---

# 11. CTA Final

## SECTION
CTA final

**PURPOSE:**  
Fechar a página com uma textura fotográfica REAL de infraestrutura elétrica.

**SOURCE_FILE:**  
`Imagens Bloss/imgi_12_730164366_18099279254600356_2569045858099444358_n.jpg`

**REUSE:**  
Sim. Também usado no Projeto 03.

**DESKTOP_USAGE:**  
Background panorâmico da faixa final.

**MOBILE_USAGE:**  
Background alto/vertical atrás do CTA.

**DESKTOP_CROP:**  
Usar faixa larga da imagem, priorizando linhas dos conduítes laranja.

**MOBILE_CROP:**  
Crop vertical, mantendo a caixa e a convergência dos conduítes.

**FOCAL_POINT:**  
Caixa preta + linhas laranja.

**ASPECT_RATIO:**  
Desktop: panorâmico `~4:1`  
Mobile: `~0.65:1`

**OBJECT_POSITION:**  
Desktop: `50% 47%`  
Mobile: `50% 68%`

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Caixa de passagem e eletrodutos laranja instalados em laje.`

**SPECIAL DETAIL:**  
Aplicar overlay escuro para legibilidade, sem apagar a cor laranja.

---

# 12. Footer

## SECTION
Footer

**SOURCE_FILE:**  
`Imagens Bloss/Logo Bloos ok.png`

**DESKTOP_USAGE:**  
Logo compacto à esquerda.

**MOBILE_USAGE:**  
Logo acima da descrição e navegação.

**CROP:**  
Sem crop.

**PRIORITY:**  
`BELOW_FOLD`

**ALT_TEXT:**  
`Bloss Eletricidade`

---

# 13. Assets que ficam como reserva e NÃO entram no layout aprovado

Estes arquivos continuam no projeto, mas não precisam ser usados no site atual.

## RESERVE 01

**SOURCE_FILE:**  
`Imagens Bloss/imgi_19_653516773_18085331165600356_5297189268647756272_n.webp`

**CONTENT:**  
Higienização de ar-condicionado com texto publicitário embutido.

**WHY NOT USED:**  
O texto ocupa grande parte da foto e não pode ser removido sem edição generativa. Não há crop limpo suficientemente útil para o layout aprovado.

---

## RESERVE 02

**SOURCE_FILE:**  
`Imagens Bloss/imgi_23_620460337_18078703811600356_7048766265760735997_n.webp`

**CONTENT:**  
Dois veículos Bloss + técnico trabalhando em estrutura alta.

**WHY NOT USED:**  
É um bom asset operacional, mas não corresponde melhor a nenhum slot do mockup do que os assets já selecionados.

**POTENTIAL FUTURE USE:**  
Case, seção de estrutura/equipe, página institucional ou galeria expandida.

---

## RESERVE 03

**SOURCE_FILE:**  
`Imagens Bloss/imgi_24_561136431_18067722758600356_3438173429783269478_n.jpg`

**CONTENT:**  
Veículo Bloss em contexto urbano/local.

**WHY NOT USED:**  
A seção de localização deve usar mapa; inserir esse veículo seria redundante.

**POTENTIAL FUTURE USE:**  
Conteúdo sobre atendimento local.

---

## RESERVE 04

**SOURCE_FILE:**  
`Imagens Bloss/imgi_28_514239055_18055490783600356_4069340214321358682_n.webp`

**CONTENT:**  
Veículo Bloss + caminhão munck + equipe em operação externa.

**WHY NOT USED:**  
Não há slot correspondente no mockup aprovado.

**POTENTIAL FUTURE USE:**  
Case de infraestrutura externa, capacidade operacional ou galeria expandida.

---

# 14. Reutilizações aprovadas

Para eliminar lacunas sem inventar imagens, três sources são reutilizados com crops distintos.

| SOURCE_FILE | USO 1 | USO 2 |
|---|---|---|
| `imgi_31_669862473_...jpg` | Serviço: Ar-condicionado Split | Projeto: Instalação de ar-condicionado |
| `imgi_17_670937440_...webp` | Serviço: Manutenção e reparos | Bloco mobile: Climatização |
| `imgi_12_730164366_...jpg` | Projeto: Quadro e infraestrutura | CTA final |

Essa reutilização é intencional e documentada.  
Não adicionar outras reutilizações sem necessidade.

---

# 15. Quick Map final

| Área do site | Asset |
|---|---|
| Header | `Logo Bloos ok.png` |
| Hero | `imgi_20_...webp` |
| Serviço — Instalações elétricas | `imgi_21_...jpg` |
| Serviço — Ar-condicionado Split | `imgi_31_...jpg` |
| Serviço — Manutenção e reparos | `imgi_17_...webp` com crop limpo |
| Serviço — Projetos e consultoria | `imgi_25_...jpg` |
| Diferenciais desktop | `imgi_8_...webp` com crop inferior |
| Projeto — Infraestrutura elétrica | `imgi_10_...webp` |
| Projeto — Instalação de ar-condicionado | `imgi_31_...jpg` com crop diferente |
| Projeto — Quadro e infraestrutura | `imgi_12_...jpg` |
| Projeto — Infraestrutura externa | `imgi_29_...jpg` |
| Avaliações | Sem foto; avatar CSS |
| Localização | Mapa real |
| Climatização mobile | `imgi_17_...webp` com crop inferior/direito |
| FAQ | Sem foto |
| CTA final | `imgi_12_...jpg` |
| Autoridade mobile | `imgi_8_...webp` com crop inferior |
| Footer | `Logo Bloos ok.png` |
| Favicon | `Favicon Bloss.png` |
| WhatsApp flutuante | `whatsapp_float.png` |
| Reserva | `imgi_19_...webp` |
| Reserva | `imgi_23_...webp` |
| Reserva | `imgi_24_...jpg` |
| Reserva | `imgi_28_...webp` |

---

# 16. Recommended repository placement

```text
src/assets/originals/
├── imgi_8_669658421_18088477829600356_2168918359444439195_n.webp
├── imgi_10_780157979_18107915249600356_7472861473561162031_n.webp
├── imgi_12_730164366_18099279254600356_2569045858099444358_n.jpg
├── imgi_17_670937440_18089925869600356_6417007879746538124_n.webp
├── imgi_19_653516773_18085331165600356_5297189268647756272_n.webp
├── imgi_20_645618175_18083465300600356_3257977585925924954_n.webp
├── imgi_21_637233637_18081713804600356_8603098672081125203_n.jpg
├── imgi_23_620460337_18078703811600356_7048766265760735997_n.webp
├── imgi_24_561136431_18067722758600356_3438173429783269478_n.jpg
├── imgi_25_560304743_18067714658600356_1070131253366214301_n.jpg
├── imgi_28_514239055_18055490783600356_4069340214321358682_n.webp
├── imgi_29_505446825_18053595314600356_586042543300605580_n.jpg
├── imgi_31_669862473_18307660462273196_4843631114602791621_n.jpg
└── whatsapp_float.png

src/assets/brand/
└── bloss-logo.png

public/
└── favicon.png
```

---

# 17. Derivados que o implementador pode gerar

```text
src/assets/images/
├── hero-eletrica-tecnico-desktop.webp
├── hero-eletrica-tecnico-mobile.webp
├── servico-instalacao-eletrica.webp
├── servico-ar-split.webp
├── servico-manutencao.webp
├── servico-projetos-iluminacao.webp
├── autoridade-predio-frota-desktop.webp
├── autoridade-predio-frota-mobile.webp
├── projeto-infraestrutura-interna.webp
├── projeto-ar-condicionado.webp
├── projeto-caixa-infraestrutura.webp
├── projeto-infraestrutura-externa.webp
├── climatizacao-tecnico-mobile.webp
├── cta-infraestrutura-desktop.webp
└── cta-infraestrutura-mobile.webp
```

Todos os derivados devem partir exclusivamente dos originals mapeados acima.

---

# 18. Regra final

Não existem mais `ASSET_MISSING` neste mapa.

Quando o mockup original mostrava uma fotografia que não existia exatamente no ZIP, foi escolhido o **asset real mais coerente disponível**, com a reutilização explicitamente documentada.

A ordem de prioridade é:

1. fidelidade ao mockup;
2. verdade factual da fotografia;
3. uso de material real da Bloss;
4. crop adequado por breakpoint;
5. evitar duplicação quando houver alternativa;
6. nunca resolver uma lacuna com stock ou IA.
