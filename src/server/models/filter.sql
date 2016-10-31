SELECT * 
from filter 
where id_item in (
 select id_item
 from filter 
 where (name = "zap" and value="tom") or (name = "filter2" and value="mam")
 group by id_item
 having count(*)=2)
 
 
 
 #2
select items.id, items.name as name, items.title as title, items.date as date, items.description as description, items.score as score, items.url_image as url_image from items, 
(
	SELECT * 
	from filter 
	where id_item in (
		 select id_item
		 from filter 
		 where (name = "zap" and value="tom") or (name = "filter2" and value="mam")
		 group by id_item
		 having count(*)=2
	 )
	 group by id_item
 ) filters, catalogue
 where filters.id_item = items.id AND catalogue.id = items.id_catalogue