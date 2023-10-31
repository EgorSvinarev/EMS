from abc import ABC, abstractmethod
from typing import Optional

from ems.application import entities, dto


class IEventRepository(ABC):
    @abstractmethod
    async def get_list(
            self,
            page: int, size: int,
            event_type: Optional[list[int]] = None,
            status: Optional[list[int]] = None,
    ) -> list[entities.Event]:
        raise NotImplementedError

    @abstractmethod
    async def get_by_id(self, event_id: int, include_rejected: bool = False) -> Optional[entities.Event]:
        raise NotImplementedError

    @abstractmethod
    async def add_one(self, event_data: dto.EventCreateRequest, creator_id: int) -> Optional[int]:
        raise NotImplementedError

    @abstractmethod
    async def update_one(self, data: dto.EventUpdateRequest) -> Optional[int]:
        raise NotImplementedError
