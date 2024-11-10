// UseProductFilters.ts
// Custom hook that encapsulates product filtering logic.
// Separated into its own file to:
// 1. Follow single responsibility principle
// 2. Make the filtering logic reusable across components
// 3. Improve maintainability by centralizing filter logic
// 4. Make testing of filtering logic easier in isolation

import { useMemo } from 'react';
import * as I from '../interfaces/interfaces';

interface UseProductFiltersProps {
  products: I.Product[];
  selectedCategory: string;
  nameFilter: string;
  priceFilter: string;
}

export const useProductFilters = ({
  products,
  selectedCategory,
  nameFilter,
  priceFilter
}: UseProductFiltersProps) => {
  return useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesName = product.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesPrice = !priceFilter || product.price <= Number(priceFilter);
      
      return matchesCategory && matchesName && matchesPrice;
    });
  }, [products, selectedCategory, nameFilter, priceFilter]);
};