
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const toolsData: Tool[] = [
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
  }
];

export const categories = [...new Set(toolsData.map(tool => tool.category))];
