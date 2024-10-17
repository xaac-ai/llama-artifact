# LlamaParse Artifact

This example code produces strange results when trying to parse a simple docx file. LlamaParse instead is parsing some clip of an image.

This problem seems related to [LlamaParse error parsing MSFT DOCX and PPTX files - suspect LlamaParseReader is applying wrong MIME Type #1313
](https://github.com/run-llama/LlamaIndexTS/issues/1313)

# Instructions

To install dependencies:

```bash
bun install
```

Copy `.env.example` to `.env` and fill in the values.

To run:

```bash
bun start
```

This project was created using `bun init` in bun v1.1.24. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Expected Results

The code should parse the docx file.

# Actual Results

The code parses a random snippet of text which appears to be the visible text in a cropped image.

## Text

```
# 8

# Ia

# LE (BLACKE:

|BLACK|REBAR|
|---|---|
|LEGEND| |
|Aou Ballom|A Top|
|Comer Bar|Bordm|
|COL: cqunm|CLA|
|DN|Dotel Verca|
|DMS; Drwess|EVBD;|
|Eivalun|Each Fact|
|Each Sije|Each Wa/|
|Grade Rezt|HCR|
|Murbzonta|CPNG; Opzing|
|On Cerer|Ouside , Face|
|on 0i|Sho7 Wad|
|Tiniczl|Wme|
|VERT; Verticai|Seclan KUrt|
|Maa| |

# ASTM A615/60 BLACK

5 M2L

cnswoon

MooreGroup Corporation

1 Jefferson Place

Baldwin; NY 11510

Phone: 516 746 , 6300

Fax : 516,746 4240

Job:

Or: P21-160

RMSOIX
```

## Image

![Failed Parse](https://github.com/xaac-ai/llama-artifact/raw/main/failed_parse.png)
