/**
 * Clean AI Tutor text utility
 * Removes markdown symbols such as asterisks (*, **, ***), hashtags (#, ##, ###),
 * and unnecessary formatting characters while preserving clean readability,
 * clean line breaks, and clear typography.
 */

export function cleanTutorText(rawText: string): string {
  if (!rawText || typeof rawText !== 'string') return '';

  let text = rawText;

  // 1. Remove markdown heading hashes (# Title -> Title, ### Header -> Header)
  text = text.replace(/^#{1,6}\s+/gm, '');

  // 2. Remove bold & italic markdown asterisks and underscores (**bold** -> bold, *italic* -> italic)
  // Repeat to handle nested or adjacent markers
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '$1');
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/___([^_]+)___/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');

  // 3. Remove stray asterisks and markdown decorative lines (e.g. ***, ---, ===)
  text = text.replace(/^\s*[\*\-_=]{3,}\s*$/gm, '');
  text = text.replace(/\s*\*\s*/g, ' ');

  // 4. Clean markdown bullet points with asterisks (* item -> • item or 1. item)
  text = text.replace(/^\s*[\*\-]\s+/gm, '• ');

  // 5. Clean markdown blockquotes (> Quote -> Quote)
  text = text.replace(/^\s*>\s*/gm, '');

  // 6. Clean backticks (`code` -> code)
  text = text.replace(/`{1,3}([^`]+)`{1,3}/g, '$1');
  text = text.replace(/`/g, '');

  // 7. Clean excessive newlines (more than 2 in a row)
  text = text.replace(/\n{3,}/g, '\n\n');

  return text.trim();
}

/**
 * Format clean sections if AI tutor provided structured breakdown
 */
export function formatTutorParagraphs(text: string): string[] {
  const cleaned = cleanTutorText(text);
  return cleaned
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}
