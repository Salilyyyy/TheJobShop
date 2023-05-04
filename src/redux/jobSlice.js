import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skus: [
    {
      id: `sku_1`,
      skuTitle: "Spring Water 16oz",
    },
  ],
  operations: [
    { id: `operation_11`, operationTitle: "Bottle Expansion", sku: "sku_1" },
    { id: `operation_12`, operationTitle: "Some Expansion", sku: "sku_1" },
  ],
  tasks: [
    { operation: "operation_11", id: `task_111`, machineID: "1", time: 10 },
    { operation: "operation_11", id: `task_112`, machineID: "2", time: 10 },
    { operation: "operation_12", id: `task_113`, machineID: "3", time: 8 },
    { operation: "operation_12", id: `task_114`, machineID: "4", time: 5 },
  ],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addSKU: (state, action) => {
      state.skus.push({ id: `sku_${Math.random()}`, skuTitle: action.payload });
    },
    addOperation: (state, action) => {
      state.operations.push({
        id: `operation_${Math.random()}`,
        operationTitle: action.payload.operationTitle,
        sku: action.payload.skuID,
      });
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: `task_${Math.random()}`,
        machineID: action.payload.machineID,
        time: action.payload.time,
        operation: action.payload.operationID,
      });
    },
    deleteTaskByTaskID: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSKU, addOperation, addTask, deleteTaskByTaskID } =
  jobSlice.actions;

export default jobSlice.reducer;
