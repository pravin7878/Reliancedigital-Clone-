import { Box } from '@chakra-ui/react'
import React from 'react'
import MyCrausel from '../Home-page/MyCrausel'

export default function PromotionalPage() {

let SliderImage = ['https://www.reliancedigital.in/medias/Oppo-F25-Pro-5G-Banner-1365x260-px.jpg?context=bWFzdGVyfGltYWdlc3wyMDY1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDc0L2hjNS8xMDExMzU2NzU1NTYxNC5qcGd8NTYwYTE4NTEwNWM0YmJkZTdmYWYzNjc0ZTgyYTE4ZDA1Y2VlZmYxN2NlZjI5ZTc2OGJlMzFlZTQ1M2I1OWUyMA','https://www.reliancedigital.in/medias/Watch-2-Launch-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjMzNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2gwZC8xMDExMzU2NjcwMzY0Ni5qcGd8NGE2NzNiZDBlMGUyNGUzMGUzNmQyZjBkMTk5ZjIwNzNhMTdhM2U0ODdkMDkzODMwMjM2N2EwZGQ5YmY3NjQwMQ','https://www.reliancedigital.in/medias/Realme-12-ProSeries-5G-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3w5NDA1NHxpbWFnZS9qcGVnfGltYWdlcy9oNGQvaGMzLzEwMTExMzM3MjY3MjMwLmpwZ3w0MDZlMTY4NDhmOGNhOTdhMWE4Nzg1ZWY0ZGMzOTM0YTIyNWFkN2FiZGQzZWU1ZWI2YWI2OTRhMzk5OThjOTQ0','https://www.reliancedigital.in/medias/Samsung-S24-Series-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMjk4MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDhhL2gyYi8xMDExMTc0MTcyMjY1NC5qcGd8MDYxNWNiOTE2YWYzMDI1YjdlOGY3ZjhiZWI5OGRiMjU5N2FjN2Y1MWI3YzM3ODk1MzkwZDFkMTg3ZTY2ODhlYg','https://www.reliancedigital.in/medias/reliance-1365x260-.jpg?context=bWFzdGVyfGltYWdlc3wxMzQ4MTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2hkMi8xMDEwNzM4MDAzOTcxMC5qcGd8NmNhOTEyOTZmZTA1N2NlYzAxM2NmNDY4OGQyY2I2Yjk4MTBmMTA2NTQ1MDU5NTQzMzBiNjM0YTkxM2JiYjFkMA','https://www.reliancedigital.in/medias/OnePlus-Buds-3-Slide-1365x260px-1-.jpg?context=bWFzdGVyfGltYWdlc3w4OTUwNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDllLzEwMTA0NjI4ODA1NjYyLmpwZ3xiYzlhMDM0NzJmMWU3YzBkMDFmY2M3YTU1OGYxYmQzOWVmZmJmOTg1YzliODJiZTliZjM3NmI3MzA0NjZjMzU3','https://www.reliancedigital.in/medias/1365-261-3-1-.jpg?context=bWFzdGVyfGltYWdlc3wxOTI1ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDM1L2g2NS8xMDEwNDYzNjMwOTUzNC5qcGd8ODNlY2JiMjMyMDQ1Y2NjMGIxZjAyNDMyNDc0N2QyNWE3NWNhNGE0ZTMxNDBlOTkyYWJhNzVkMmI4YTEyNWY5OQ','https://www.reliancedigital.in/medias/Reliance-1365-265-px.jpg?context=bWFzdGVyfGltYWdlc3wxODcyMjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2hjMy8xMDEwMzgzOTQyNDU0Mi5qcGd8ZDdlZDkyZmU5NmU5MWY5NTBmNzg4YmNhZmFmZjk5Y2Y0NzBhOWFiZWI5MmY4YzdmMjJkM2FjMjRmMzFkYzRmNw','https://www.reliancedigital.in/medias/1365X260-Banner.png?context=bWFzdGVyfGltYWdlc3wxOTg3ODd8aW1hZ2UvcG5nfGltYWdlcy9oOGYvaDU3LzEwMTAzODM5MjkzNDcwLnBuZ3w1MjE1ODdiYzJlMGU2MzlhN2YxNTdjM2FlMDBhYjA1NmIxYmNkMTAxYmM0NWYzMGMxYTQ0ZTI0ZTA1ZWEwMGI0']

  return (
    <Box w={'95%'} m={'auto'} mt={'100px'} mb={'100px'}>
<MyCrausel data={SliderImage} deleytime={5000} PagePerview={1}/>
    </Box>
  )
}
