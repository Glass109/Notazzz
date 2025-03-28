const iconMappings = {
  'school': 'ph:school',
  'home': 'ph:house',
  'chores': 'ph:check-circle',
  'weekend': 'ph:calendar-blank',
  'notes': 'ph:notebook',
  'tasks': 'ph:list',
  'reminders': 'ph:bell',
  'settings': 'ph:gear',
  'logout': 'ph:sign-out',
  'profile': 'ph:user',
  'password': 'ph:lock',
  'email': 'ph:envelope',
  'phone': 'ph:phone',
  'address': 'ph:map-pin',
  
}
export default (icon: string) : string => {
  return iconMappings[icon as keyof typeof iconMappings] || 'ph:question'
}
