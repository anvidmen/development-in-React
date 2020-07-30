SELECT COUNT(*) AS 'total'  FROM flights;

SELECT Origin, AVG(ArrDelay) AS prom_arribades, AVG(DepDelay) prom_sortides FROM flights
GROUP BY Origin;

SELECT Origin, colYear, colMonth, AVG(ArrDelay) AS prom_arribades FROM flights
GROUP BY Origin, colYear, colMonth 
ORDER BY Origin, colYear, colMonth;

SELECT u.City, f.colYear, f.colMonth, AVG(f.ArrDelay) AS prom_arribades FROM flights f
LEFT JOIN usairports u ON u.IATA = f.Origin
GROUP BY u.City, f.colYear, f.colMonth 
ORDER BY u.City, f.colYear, f.colMonth;

SELECT UniqueCarrier, colYear, colMonth, sum(cancelled) AS total_cancelled FROM flights
INNER JOIN USAirports ON Origin = IATA
GROUP BY UniqueCarrier, colYear, colMonth
HAVING  total_cancelled > 0
ORDER BY total_cancelled DESC;

SELECT TailNum, sum(Distance) AS totalDistance FROM flights
GROUP BY TailNum
HAVING TailNum != ''
ORDER BY totalDistance desc 
LIMIT 10;

SELECT UniqueCarrier,  avg(ArrDelay) AS avgDelay FROM flights
GROUP BY UniqueCarrier
HAVING avgDelay > 10.0
ORDER BY avgDelay desc;

