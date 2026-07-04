import { describe, it, expect, vi } from 'vitest';
import { generateDestinationInfo } from './aiService';

describe('aiService', () => {
  it('should generate destination info for Kyoto', async () => {
    const onProgress = vi.fn();
    const result = await generateDestinationInfo('Kyoto', '', onProgress);
    
    expect(result).toContain('Otagi Nenbutsu-ji');
    expect(result).toContain('Kurama to Kibune Hike');
    expect(onProgress).toHaveBeenCalled();
  });

  it('should generate default destination info for an unknown place', async () => {
    const onProgress = vi.fn();
    const result = await generateDestinationInfo('Paris', '', onProgress);
    
    expect(result).toContain('The Magic of Paris');
    expect(result).toContain('The Secret Courtyard');
    expect(onProgress).toHaveBeenCalled();
  });

  it('should include interests if provided', async () => {
    const onProgress = vi.fn();
    const result = await generateDestinationInfo('Tokyo', 'Food', onProgress);
    
    expect(result).toContain('Curated for You');
    expect(result).toContain('Based on your interest in **Food**');
    expect(onProgress).toHaveBeenCalled();
  });
});
