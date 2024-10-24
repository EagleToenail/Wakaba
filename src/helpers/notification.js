const createDesktopNotification = async ({ title, body, icon }) => {
  try {
    const errData = {};

    // Check if the browser supports notifications
    if (!('Notification' in window)) {
      errData.message = 'This browser does not support desktop notifications';
      throw new Error(errData.message);
    }

    // Check if the document is hidden and permission is granted
    if (document.visibilityState === 'hidden' && Notification.permission === 'granted') {
      const notif = new Notification(title, { body, icon });

      // Handle notification error
      notif.onerror = (error) => {
        console.error('Notification error:', error);
      };
    } else {
      // Ask the user for permission if not granted
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification(title, { body, icon });
      } else {
        console.error('Notification permission denied');
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export default createDesktopNotification;