"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../order");
var store = new order_1.OrdersStore();
describe('3 - Test Order Model', function () {
    it('3.1 Should create order with \'complete\' status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, result, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = {
                        productId: 1,
                        quantity: 5,
                        userId: 1,
                        status: 'complete'
                    };
                    return [4 /*yield*/, store.Create(order)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, store.Show(1)];
                case 2:
                    response = _a.sent();
                    expect(response.quantity).toEqual(result.quantity);
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.2 Should create order with \'active\' status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var order, result, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = {
                        productId: 1,
                        quantity: 3,
                        userId: 1,
                        status: 'active'
                    };
                    return [4 /*yield*/, store.Create(order)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, store.Show(2)];
                case 2:
                    response = _a.sent();
                    expect(response.status).toEqual(result.status);
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.3 Should show current order by user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.CurrentByUser(1)];
                case 1:
                    result = _a.sent();
                    expect(result.status).toEqual('active');
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.4 Should show complete order by user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.CompleteByUser(1)];
                case 1:
                    result = _a.sent();
                    expect(result[0].status).toEqual('complete');
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.5 Should show order by its id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.Show(4)];
                case 1:
                    result = _a.sent();
                    expect(result.quantity).toEqual(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.6 Should show all orders', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.Index()];
                case 1:
                    result = _a.sent();
                    expect(result.length).toEqual(4);
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.7 Should add product to order that\'s active', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, orderId, productId, quantity, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.CurrentByUser(1)];
                case 1:
                    result = _a.sent();
                    orderId = result.id;
                    productId = 2;
                    quantity = 7;
                    return [4 /*yield*/, store.AddProductToOrder(orderId, productId, quantity)];
                case 2:
                    response = _a.sent();
                    expect(response).toEqual({
                        id: 2,
                        order_id: 2,
                        product_id: 2,
                        quantity: 7
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('3.8 Should get orders by order_id foreign key', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, store.GetOrdersById(2)];
                case 1:
                    response = _a.sent();
                    expect(response[0].quantity).toEqual(7);
                    return [2 /*return*/];
            }
        });
    }); });
});
