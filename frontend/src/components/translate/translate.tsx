import React, { useEffect } from 'react';

interface TranslationProps {
  selectedLanguageCode: string;
  onClose: () => void;
}

const TranslationModal: React.FC<TranslationProps> = ({
  selectedLanguageCode,
  onClose,
}: TranslationProps) => {
  useEffect(() => {
    const translateNode = async (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const originalText = node.textContent?.trim();

        const response = await fetch('https://lecto-translate.com/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add your API key or any required authentication headers
            // 'Authorization': `Bearer YOUR_API_KEY`,
          },
          body: JSON.stringify({
            text: originalText,
            target_language: selectedLanguageCode,
          }),
        });

        if (response.ok) {
          const translatedContent = await response.json();
          node.textContent = translatedContent.text;
        } else {
          console.error('Failed to translate text:', response.statusText);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const childNodes = node.childNodes;
        for (const child of Array.from(childNodes)) {
          await translateNode(child);
        }
      }
    };

    const rootNode = document.body;
    Array.from(rootNode.childNodes).forEach(async (childNode) => {
      await translateNode(childNode);
    });
  }, [selectedLanguageCode]);

  return null; // This component doesn't render anything visible
};

export default TranslationModal;
