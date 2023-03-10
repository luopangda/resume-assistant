import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import Footer from '../footer';

  import styles from '../index.module.scss';

  const SelfAssessment = (props: any) => {

    const { initialValues } = props;

      return(
          <>
          <Form
            name='selfAssessment'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
              <Form.Item label="自我描述" name='description'>
                  <Input />
              </Form.Item>
              <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default SelfAssessment;