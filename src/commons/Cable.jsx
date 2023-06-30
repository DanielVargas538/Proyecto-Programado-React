import ActionCable from 'actioncable';

const Cable = ActionCable.createConsumer('ws://localhost:3000/cable');

export default Cable;