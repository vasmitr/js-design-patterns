const logManager = {
  print (message, level) {
    switch (level) {
      case 'info':
        console.info(message)
        break;
      case 'warning':
        console.warn(message)
      break;
      case 'error':
        console.error(message)
      break;
    
      default:
        break;
    }
  },
  send (message, level) {
    console.log(`Sending message ${ message } with ${ level } level`)
  },
  execute (name) {
    return logManager[name] 
      && logManager[name].apply(logManager, [].slice.call(arguments, 1))
  }
}

logManager.execute('print', 'Hello', 'info')
logManager.execute('print', 'Warning', 'warning')
logManager.execute('print', 'Error', 'error')
logManager.execute('send', 'Hello', 'info')
