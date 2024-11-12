import { MinusCircle, PlusCircle} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Component for quantity control with increase, decrease, and manual input options
export const QuantityControl: React.FC<{
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
    onManualChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }> = ({ quantity, onDecrease, onIncrease, onManualChange }) => (
    <div className="flex items-center justify-center space-x-2">

      {/* Button to decrease quantity */}
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        className="h-10 w-10 bg-blue-500 text-white"
      >
        <MinusCircle className="h-5 w-5" />
      </Button>
      {/* Input field to manually set quantity */}
      <Input
        type="number"
        value={quantity}
        onChange={onManualChange}
        className="w-16 text-center h-10"
        min="1"
      />
      {/* Button to increase quantity */}
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        className="h-10 w-10 bg-blue-500 text-white"
      >
        <PlusCircle className="h-5 w-5" />
      </Button>
    </div>
  );