
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const toolsData: Tool[] = [
  // PDF Tools
  {
    id: "pdf-compress",
    name: "Compress PDF",
    description: "Reduce the size of your PDF files easily",
    icon: "file",
    category: "PDF"
  },
  {
    id: "pdf-merge",
    name: "Merge PDF",
    description: "Combine multiple PDFs into a single document",
    icon: "files",
    category: "PDF"
  },
  {
    id: "pdf-split",
    name: "Split PDF",
    description: "Extract pages from your PDF files",
    icon: "scissors",
    category: "PDF"
  },
  {
    id: "pdf-protect",
    name: "Protect PDF",
    description: "Add password protection to your PDF files",
    icon: "shield",
    category: "PDF"
  },
  {
    id: "pdf-unlock",
    name: "Unlock PDF",
    description: "Remove password protection from PDF files",
    icon: "unlock",
    category: "PDF"
  },
  {
    id: "pdf-organize",
    name: "Organize PDF",
    description: "Rearrange pages in your PDF documents",
    icon: "layers",
    category: "PDF"
  },
  {
    id: "pdf-rotate",
    name: "Rotate PDF",
    description: "Change the orientation of PDF pages",
    icon: "compass",
    category: "PDF"
  },
  {
    id: "pdf-annotate",
    name: "Annotate PDF",
    description: "Add comments, highlights and text to PDFs",
    icon: "file-text",
    category: "PDF"
  },
  {
    id: "pdf-ocr",
    name: "PDF OCR",
    description: "Convert scanned PDFs to searchable text",
    icon: "search",
    category: "PDF"
  },

  // Image Tools
  {
    id: "image-compress",
    name: "Compress Image",
    description: "Reduce image size without losing quality",
    icon: "image",
    category: "Image"
  },
  {
    id: "image-convert",
    name: "Convert Image",
    description: "Change image formats (JPG, PNG, WebP)",
    icon: "images",
    category: "Image"
  },
  {
    id: "image-resize",
    name: "Resize Image",
    description: "Change dimensions of your images easily",
    icon: "maximize",
    category: "Image"
  },
  {
    id: "image-crop",
    name: "Crop Image",
    description: "Cut out unwanted parts of your images",
    icon: "scissors",
    category: "Image"
  },
  {
    id: "image-rotate",
    name: "Rotate Image",
    description: "Rotate or flip your images as needed",
    icon: "compass",
    category: "Image"
  },
  {
    id: "image-watermark",
    name: "Add Watermark",
    description: "Protect your images with text or logo watermarks",
    icon: "shield",
    category: "Image"
  },
  {
    id: "image-filter",
    name: "Image Filters",
    description: "Apply effects and filters to enhance images",
    icon: "layers",
    category: "Image"
  },
  {
    id: "image-background",
    name: "Remove Background",
    description: "Automatically remove image backgrounds",
    icon: "eraser",
    category: "Image"
  },
  {
    id: "image-collage",
    name: "Create Collage",
    description: "Combine multiple images into one collage",
    icon: "layout",
    category: "Image"
  },

  // Video Tools
  {
    id: "video-compress",
    name: "Compress Video",
    description: "Make your videos smaller without quality loss",
    icon: "video",
    category: "Video"
  },
  {
    id: "video-convert",
    name: "Convert Video",
    description: "Change video formats (MP4, AVI, MOV)",
    icon: "film",
    category: "Video"
  },
  {
    id: "video-trim",
    name: "Trim Video",
    description: "Cut unwanted parts from your videos",
    icon: "scissors",
    category: "Video"
  },
  {
    id: "video-merge",
    name: "Merge Video",
    description: "Combine multiple video clips into one",
    icon: "layers",
    category: "Video"
  },
  {
    id: "video-rotate",
    name: "Rotate Video",
    description: "Change the orientation of your videos",
    icon: "compass",
    category: "Video"
  },
  {
    id: "video-watermark",
    name: "Add Watermark",
    description: "Add text or logo watermarks to videos",
    icon: "shield",
    category: "Video"
  },
  {
    id: "video-stabilize",
    name: "Stabilize Video",
    description: "Reduce shakiness in handheld videos",
    icon: "hand",
    category: "Video"
  },
  {
    id: "video-speed",
    name: "Change Speed",
    description: "Speed up or slow down your videos",
    icon: "fast-forward",
    category: "Video"
  },
  {
    id: "video-subtitle",
    name: "Add Subtitles",
    description: "Create and add subtitles to your videos",
    icon: "message-square",
    category: "Video"
  },

  // Convert Tools
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF files to editable Word documents",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    description: "Extract images from your PDF files",
    icon: "image",
    category: "Convert"
  },
  {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Turn your images into PDF documents",
    icon: "file",
    category: "Convert"
  },
  {
    id: "excel-to-pdf",
    name: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF files",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "pdf-to-excel",
    name: "PDF to Excel",
    description: "Convert PDF tables to Excel spreadsheets",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "powerpoint-to-pdf",
    name: "PowerPoint to PDF",
    description: "Convert presentations to PDF format",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "html-to-pdf",
    name: "HTML to PDF",
    description: "Convert web pages to PDF documents",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "pdf-to-ppt",
    name: "PDF to PowerPoint",
    description: "Convert PDF files to PowerPoint presentations",
    icon: "file-text",
    category: "Convert"
  },
  {
    id: "audio-convert",
    name: "Audio Converter",
    description: "Convert between audio formats (MP3, WAV, etc)",
    icon: "music",
    category: "Convert"
  },
  {
    id: "epub-to-pdf",
    name: "EPUB to PDF",
    description: "Convert ebooks to PDF format",
    icon: "book",
    category: "Convert"
  },
  {
    id: "csv-to-excel",
    name: "CSV to Excel",
    description: "Convert CSV files to Excel spreadsheets",
    icon: "file-text",
    category: "Convert"
  }
];

export const categories = [...new Set(toolsData.map(tool => tool.category))];
