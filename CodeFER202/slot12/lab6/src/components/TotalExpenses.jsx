import { Card } from "react-bootstrap";

function TotalExpenses({ expenses }) {

  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  const formatMoney = (money) =>
    money.toLocaleString("vi-VN") + " đ";

  return (
    <Card>
      <Card.Body>
        <Card className="total-card">
          <h5>Total of Expenses</h5>
          <h3>{formatMoney(total)}</h3>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default TotalExpenses;