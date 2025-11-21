// src/screens/ActiveOrdersScreen.tsx
import React from 'react';
import { FlatList, View } from 'react-native';
import { OrderCard, OrderStatus } from '../components/OrderCard';

const activeOrdersData = [
  { id: '1', name: 'Tomate Chonto por caja', details: 'Tu pedido: 10 cajas', status: 'CONSOLIDANDO' as OrderStatus },
  { id: '2', name: 'Tomate Chonto por caja', details: 'Tu pedido: 10 cajas', status: 'CONFIRMADO' as OrderStatus },
  { id: '3', name: 'Tomate Chonto por caja', details: 'Tu pedido: 10 cajas', status: 'EN REPARTO' as OrderStatus },
];

export const ActiveOrdersScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={activeOrdersData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrderCard
            productName={item.name}
            order_details={item.details}
            status={item.status}
          />
        )}
      />
    </View>
  );
};