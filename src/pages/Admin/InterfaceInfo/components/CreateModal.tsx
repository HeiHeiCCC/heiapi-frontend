import {
 ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';


export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visiable: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const {visiable, columns, onCancel, onSubmit} = props;

  return (
    <Modal visible={visiable} footer={null} onCancel={() => onCancel?.()}>
      <ProTable type = "form" columns={columns} onSubmit={async (value) => {
        onSubmit?.(value);
      }}/>
    </Modal>

  );
};

export default CreateModal;
