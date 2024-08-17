import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './ModalForm.module.css';

const ModalForm = () => {
  const dateSchema =
    /^(\d|0\d|[12]\d|3[01]).(0\d|1[012]).(202[456789]|20[3]\d)$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    date: Yup.string()
      .matches(dateSchema, 'Please enter real date in format DD.MM.YYYY')
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = () => {
    document.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className={styles.form}>
        <h5 className={styles.title}>Book your campervan now</h5>
        <p className={styles.helpText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={styles.inputWithDanger}>
          <input
            type="text"
            name="name"
            {...register('name')}
            className={styles.input}
            placeholder="Name"
          />
          <small className={styles.textDanger}>
            {errors?.name && errors.name.message}
          </small>
        </div>
        <div className={styles.inputWithDanger}>
          <input
            type="email"
            name="email"
            {...register('email')}
            className={styles.input}
            placeholder="Email"
          />
          <small className={styles.textDanger}>
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div className={styles.inputWithDanger}>
          <input
            type="text"
            name="date"
            {...register('date')}
            className={styles.input}
            placeholder="Booking date"
          />
          <small className={styles.textDanger}>
            {errors?.date && errors.date.message}
          </small>
        </div>
        <textarea className={styles.commentArea} placeholder="Comment" />
        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
