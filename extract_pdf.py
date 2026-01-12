#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
from PyPDF2 import PdfReader

def extract_text_from_pdf(pdf_path, output_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""

        for page_num, page in enumerate(reader.pages, 1):
            text += f"\n{'='*80}\n"
            text += f"PAGE {page_num}\n"
            text += f"{'='*80}\n"
            text += page.extract_text()
            text += "\n"

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)

        print(f"Successfully extracted text from {len(reader.pages)} pages")
        print(f"Output saved to: {output_path}")

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    pdf_path = r"d:\Dev\trexim-v2\src\Trexim_client.pdf"
    output_path = r"d:\Dev\trexim-v2\src\Trexim_client_extracted.txt"
    extract_text_from_pdf(pdf_path, output_path)
