import React from 'react';
import PropTypes from 'prop-types';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import devices from 'devextreme/core/devices';

const deviceType = devices.current().deviceType;
const phone = deviceType === 'phone' ? true : false;

const ToDoGrid = ({ dataSource, editClick, delClick }) => {
  const cellRender = ({ data = {} }) => (
    <>
      <Button
        hint="ToDo edit"
        type="default"
        stylingMode="text"
        icon="edit"
        onClick={(btn) => editClick(data)}
      />
      <Button
        hint="ToDo delete"
        type="danger"
        stylingMode="text"
        icon="trash"
        onClick={(btn) => delClick(data)}
      />
    </>
  );

  return (
    <div className={phone ? '' : 'content-block'}>
      <DataGrid
        className={'dx-card wide-card'}
        dataSource={dataSource}
        showBorders={false}
        focusedRowEnabled={false}
        columnHidingEnabled={false}
        noDataText={'Add ToDo'}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <Column dataField={'note'} minWidth={200} caption={'Note'} />
        <Column dataField={'dateCreate'} width={150} caption={'Date create'} />
        <Column
          dataField="id"
          caption={' '}
          cellRender={cellRender}
          width={80}
          alignment="center"
        />
      </DataGrid>
    </div>
  );
};

ToDoGrid.propTypes = {
  editClick: PropTypes.func.isRequired,
  delClick: PropTypes.func.isRequired,
};

export default ToDoGrid;
