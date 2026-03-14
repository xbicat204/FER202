import { Table, Button } from "react-bootstrap";

function ExpenseTable({ expenses, handleEdit, handleDelete }) {

  const formatMoney = (money) =>
    Number(money).toLocaleString("vi-VN") + " đ";

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("vi-VN");
  };

  return (
    <Table bordered hover striped className="expense-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th style={{ width: "150px" }} className="text-center">
            Action
          </th>
        </tr>
      </thead>

      <tbody>

        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center text-muted">
              No expenses found
            </td>
          </tr>
        ) : (
          expenses.map((e) => (
            <tr key={e.id}>

              <td>{e.name}</td>

              <td>{formatMoney(e.amount)}</td>

              <td>{e.category}</td>

              <td>{formatDate(e.date)}</td>

              <td className="text-center">

                <Button
                  size="sm"
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(e)}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </Button>

              </td>

            </tr>
          ))
        )}

      </tbody>

    </Table>
  );
}

export default ExpenseTable;