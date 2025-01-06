import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {Form, Label,Select, Textarea, Input, Span, Button} from './Services.styled';

const SignupSchema = Yup.object().shape({
  type: Yup.string().required("Виберіть тип послуги"),
  fullName: Yup.string().required("Це поле обов'язкове"),
  email: Yup.string()
    .email("Введіть дійсну електронну пошту")
    .required("Це поле обов'язкове"),
  phone: Yup.string()
    .matches(/^[\d\-+()\s]*$/, "Введіть коректний номер телефону")
    .nullable(),
});

export const ServicesForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Форма отправлена:", data);
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Список "За упокой" или "За здравие" */}
        <Label htmlFor="type">Тип послуги:</Label>
        <Select id="type" {...register("type")}>
          <option value="">Оберіть тип</option>
          <option value="За упокой">За упокой</option>
          <option value="За здравие">За здравие</option>
        </Select>
        {errors.type && <p>{errors.type.message}</p>}

        {/* Поле для полного имени или нескольких */}
        <Label htmlFor="fullName">Повне ім'я або декілька:</Label>
        <Textarea
          id="fullName"
          {...register("fullName")}
          placeholder="Введіть ім'я або декілька"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        {/* Поле для электронной почты */}
        <Label htmlFor="email">Для зворотного зв'язку (email):</Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Введіть вашу електронну пошту"
        />
        {errors.email && <p>{errors.email.message}</p>}

        {/* Поле для телефона */}
        <Label htmlFor="phone">Введіть ваш телефон <Span>* Не обов'язково: </Span></Label>
        <Input
          type="text"
          id="phone"
          {...register("phone")}
          placeholder="+380"
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        {/* Кнопка отправки */}
        <Button type="submit">Відправити</Button>
      </Form>
    </>
  );
};
