import {z} from 'zod';

const messageSchema = z.object({
  name: z.string().nonempty('نام و نام خانوادگی الزامی هست'),
  email: z.string().nonempty('ایمیل الزامی هست').email('ایمیل معتبر نیست'),
  phone: z.string().optional(),
  message: z.string().nonempty('پیام الزامی هست').max(200, {message: ''}),
});

export default messageSchema;
