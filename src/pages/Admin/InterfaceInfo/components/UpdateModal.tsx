import {
 ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
import {ProFormInstance} from "@ant-design/pro-form/lib";


export type Props = {
  values : API.InterfaceInfo,
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visiable: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const {visiable, columns, onCancel, onSubmit, values} = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values])

  return (
    <Modal visible={visiable} footer={null} onCancel={() => onCancel?.()}>
      <ProTable
        type = "form"
        formRef={formRef}
        columns={columns}
        onSubmit={async (value) => {
        onSubmit?.(value);
      }}
      form={{
        initialValues: values
      }
      }
      />
    </Modal>

  );
};

export default UpdateModal;
