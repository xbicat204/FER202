import { Card, Form, Button } from "react-bootstrap";

function ExpenseForm({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  date,
  setDate,
  handleSave,
  handleReset,
}) {

  return (
    <Card className="expense-form">
      <Card.Body>

        <h5 className="mb-3">Edit Expense</h5>

        <Form onSubmit={handleSave}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expense name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Mua sắm">Mua sắm</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={handleReset}
            >
              Reset
            </Button>

            <Button
              variant="primary"
              type="submit"
            >
              Save
            </Button>
          </div>

        </Form>

      </Card.Body>
    </Card>
  );
}

export default ExpenseForm;