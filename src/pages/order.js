import { ProtectedRoute } from '../components/ProtectedRoute';

function OrderPage() {
    // ... existing code ...
}

export default function Order() {
    return (
        <ProtectedRoute>
            <OrderPage />
        </ProtectedRoute>
    );
} 