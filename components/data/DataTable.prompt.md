DataTable — contracts, payments, vehicles lists. Mono columns for plates, numbers, amounts (right-aligned).

```jsx
<DataTable columns={[{key:'nr',label:'Nr.',mono:true},{key:'client',label:'Klienti'},{key:'amount',label:'Shuma',align:'right',mono:true},{key:'st',label:'Statusi',render:r=><Badge status={r.st}>{r.stLabel}</Badge>}]} rows={rows} />
```
