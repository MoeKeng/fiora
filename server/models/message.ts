import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
    createTime: { type: Date, default: Date.now, index: true },

    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    to: {
        type: String,
        index: true,
    },
    type: {
        type: String,
        enum: ['text', 'image', 'code', 'invite', 'system'],
        default: 'text',
    },
    content: {
        type: String,
        default: '',
    },
});

const Message = model('Message', MessageSchema);
module.exports = Message;
