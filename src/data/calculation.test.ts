import {calculatePrice} from './calculation';

test('calculatePrice with standard package', () => {
    const price = calculatePrice(50, {rate: 1, name: () => "Standard", key: 'super'}, {rate: 1, name: 'Germany', currency: 'EUR'})
    expect(price.basePrice).toBe(500);
    expect(price.fullPrice).toBe(500);
});

test('calculatePrice with safe package', () => {
    const price = calculatePrice(50, {rate: 1.5, name: () => "Safe", key: 'super'}, {rate: 1, name: 'Germany', currency: 'EUR'})
    expect(price.basePrice).toBe(500);
    expect(price.fullPrice).toBe(750);
});

test('calculatePrice with super safe package', () => {
    const price = calculatePrice(50, {rate: 1.75, name: () => "Super safe", key: 'super'}, {rate: 1, name: 'Germany', currency: 'EUR'})
    expect(price.basePrice).toBe(500);
    expect(price.fullPrice).toBe(875);
});

test('calculatePrice with standard package and more expensive country', () => {
    const price = calculatePrice(50, {rate: 1, name: () => "Standard", key: 'super'}, {rate: 3, name: 'Switzerland', currency: 'EUR'})
    expect(price.basePrice).toBe(1500);
    expect(price.fullPrice).toBe(1500);
});

test('calculatePrice with safe package and more expensive country', () => {
    const price = calculatePrice(50, {rate: 1.5, name: () => "Safe", key: 'super'}, {rate: 3, name: 'Switzerland', currency: 'EUR'})
    expect(price.basePrice).toBe(1500);
    expect(price.fullPrice).toBe(2250);
});

test('calculatePrice with super safe package and more expensive country', () => {
    const price = calculatePrice(50, {rate: 1.75, name: () => "Super safe", key: 'super'}, {rate: 3, name: 'Switzerland', currency: 'EUR'})
    expect(price.basePrice).toBe(1500);
    expect(price.fullPrice).toBe(2625);
});

