export function formatTime(time: string): string {
  // If time is in HH:MM:SS format, convert to 12-hour format with AM/PM
  const [hours, minutes, seconds] = time.split(':').map(Number);
  
  if (isNaN(hours) || isNaN(minutes)) {
    return time; // Return original if parsing fails
  }
  
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getRelativeDate(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}
